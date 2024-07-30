import React, { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

const useStateManager = (reducer, initialState, middleware) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhancedDispatch = useMemo(() => {
    if (middleware && Array.isArray(middleware)) {
      return (action) => {
        const middlewareChain = middleware.map((m) => m({ getState: () => state, dispatch }));
        const composedMiddleware = middlewareChain.reduce((a, b) => (next) => a(b(next)));
        composedMiddleware(dispatch)(action);
      };
    }
    return dispatch;
  }, [state, middleware]);

  return { state, dispatch: enhancedDispatch };
};

const defaultStore = {
  initialStates: {},
  reducers: {},
  middleware: [],
};

export const Provider = ({ children, store = defaultStore }) => {
  if (!store || typeof store !== "object") {
    throw new Error("Invalid store provided to Provider");
  }

  const { reducers, initialStates, middleware } = store;

  const rootReducer = useMemo(() => {
    const actionHandlers = {};
    const reducerKeys = new Set();

    Object.values(reducers).forEach((reducerGroup) => {
      Object.entries(reducerGroup).forEach(([key, handler]) => {
        if (reducerKeys.has(key)) {
          throw new Error(`Duplicate key found in reducers: ${key}`);
        }
        reducerKeys.add(key);
        actionHandlers[key] = handler;
      });
    });

    return (state, action) => {
      const handler = action && action.type ? actionHandlers[action.type] : null;
      return handler ? handler(state, action) : state;
    };
  }, [reducers]);

  const rootInitialStates = useMemo(() => {
    const newStates = {};
    const stateKeys = new Set();

    Object.values(initialStates).forEach((stateGroup) => {
      Object.entries(stateGroup).forEach(([key, value]) => {
        if (stateKeys.has(key)) {
          throw new Error(`Duplicate key found in initialStates: ${key}`);
        }
        stateKeys.add(key);
        newStates[key] = value;
      });
    });

    return newStates;
  }, [initialStates]);

  const { state, dispatch } = useStateManager(rootReducer, rootInitialStates, middleware);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
  store: PropTypes.shape({
    initialStates: PropTypes.objectOf(PropTypes.object),
    reducers: PropTypes.objectOf(PropTypes.objectOf(PropTypes.func)),
    middleware: PropTypes.arrayOf(PropTypes.func),
  }),
};

export const useStateValue = () => useContext(StateContext);

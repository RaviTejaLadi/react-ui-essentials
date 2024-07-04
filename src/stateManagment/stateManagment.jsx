import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

const useStateManager = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

const defaultStore = {
  initialStates: {},
  reducers: {}
};

export const Provider = ({ children, store = defaultStore }) => {
  if (!store || typeof store !== 'object') {
    throw new Error('Invalid store provided to Provider');
  }

  const { reducers, initialStates } = store;

  const rootReducer = (state, action) => {
    const newReducer = {};
    const oldReducer = reducers ? { ...Object.values(reducers) } : {};

    const reducerKeys = new Set();
    for (const key in oldReducer) {
      if (oldReducer[key]) {
        for (const innerKey in oldReducer[key]) {
          if (reducerKeys.has(innerKey)) {
            throw new Error(`Duplicate key found in reducers: ${innerKey}`);
          }
          reducerKeys.add(innerKey);
          newReducer[innerKey] = oldReducer[key][innerKey];
        }
      }
    }

    const actionHandlers = { ...newReducer };
    const handler = action && action.type ? actionHandlers[action.type] : null;
    if (handler) {
      return handler(state, action);
    }
    return state;
  };

  const newStates = {};
  const oldStates = initialStates ? { ...Object.values(initialStates) } : {};

  const stateKeys = new Set();
  for (const key in oldStates) {
    if (oldStates[key]) {
      for (const innerKey in oldStates[key]) {
        if (stateKeys.has(innerKey)) {
          throw new Error(`Duplicate key found in initialStates: ${innerKey}`);
        }
        stateKeys.add(innerKey);
        newStates[innerKey] = oldStates[key][innerKey];
      }
    }
  }

  const rootInitialStates = { ...newStates };
  const { state, dispatch } = useStateManager(rootReducer, rootInitialStates);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
  store: PropTypes.shape({
    initialStates: PropTypes.object,
    reducers: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

export const useStateValue = () => useContext(StateContext);
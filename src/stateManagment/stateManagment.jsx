import React, { createContext, useContext, useReducer, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

// Create a context for our state
const StateContext = createContext();

// Function to create a slice of state
export const createSlice = ({ name, initialState, reducers }) => {
  // Validate inputs
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Slice name must be a non-empty string");
  }
  if (typeof initialState !== "object") {
    throw new Error("Initial state must be an object");
  }
  if (typeof reducers !== "object" || reducers === null) {
    throw new Error("Reducers must be an object");
  }

  // Create action creators for each reducer
  const actionCreators = {};
  Object.keys(reducers).forEach((type) => {
    if (typeof reducers[type] !== "function") {
      throw new Error(`Reducer "${type}" must be a function`);
    }
    // Action type now includes the slice name to ensure uniqueness
    actionCreators[type] = (payload) => ({
      type: `${name}/${type}`,
      payload,
    });
  });

  return {
    name,
    initialState,
    // Reducer function for this slice
    reducer: (state = initialState, action) => {
      if (typeof action !== "object" || action === null) {
        throw new Error("Action must be an object");
      }
      if (typeof action.type !== "string") {
        throw new Error("Action type must be a string");
      }

      const [sliceName, actionType] = action.type.split("/");
      // Only apply the reducer if the action belongs to this slice
      if (sliceName === name && reducers[actionType]) {
        return reducers[actionType](state, action);
      }
      return state;
    },
    actions: actionCreators,
  };
};

// Function to configure the store
export const configureStore = ({ reducer }) => {
  if (typeof reducer !== "object" || reducer === null) {
    throw new Error("Reducer must be an object");
  }

  // Root reducer that combines all slice reducers
  const rootReducer = (state = {}, action) => {
    if (typeof action !== "object" || action === null) {
      throw new Error("Action must be an object");
    }
    if (typeof action.type !== "string") {
      throw new Error("Action type must be a string");
    }

    const newState = {};
    let hasChanged = false;

    Object.entries(reducer).forEach(([key, sliceReducer]) => {
      if (typeof sliceReducer !== "function") {
        throw new Error(`Reducer for "${key}" must be a function`);
      }
      const previousStateForKey = state[key];
      const nextStateForKey = sliceReducer(previousStateForKey, action);
      newState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    });

    return hasChanged ? newState : state;
  };

  // Create initial state by calling each slice reducer with undefined state and @@INIT action
  const initialState = Object.entries(reducer).reduce((acc, [key, sliceReducer]) => {
    if (typeof sliceReducer !== "function") {
      throw new Error(`Reducer for "${key}" must be a function`);
    }
    acc[key] = sliceReducer(undefined, { type: "@@INIT" });
    return acc;
  }, {});

  return { rootReducer, initialState };
};

// Provider component to wrap the app and provide state
export const Provider = ({ children, store }) => {
  if (!store || typeof store !== "object") {
    throw new Error("Invalid store provided to Provider");
  }
  if (typeof store.rootReducer !== "function") {
    throw new Error("Store must have a rootReducer function");
  }
  if (typeof store.initialState !== "object" || store.initialState === null) {
    throw new Error("Store must have an initialState object");
  }

  const [state, dispatch] = useReducer(store.rootReducer, store.initialState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
  store: PropTypes.shape({
    rootReducer: PropTypes.func.isRequired,
    initialState: PropTypes.object.isRequired,
  }).isRequired,
};

// Hook to select data from the state
export const useSelector = (selector) => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useSelector must be used within a Provider");
  }
  if (typeof selector !== "function") {
    throw new Error("Selector must be a function");
  }
  return selector(context.state);
};

// Hook to get the dispatch function
export const useDispatch = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useDispatch must be used within a Provider");
  }
  return useCallback(
    (action) => {
      if (typeof action === "function") {
        return action(context.dispatch, () => context.state);
      }
      return context.dispatch(action);
    },
    [context]
  );
};

// Function to create a standalone action creator
export const createAction = (type) => {
  if (typeof type !== "string" || type.trim() === "") {
    throw new Error("Action type must be a non-empty string");
  }
  return (payload) => ({ type, payload });
};

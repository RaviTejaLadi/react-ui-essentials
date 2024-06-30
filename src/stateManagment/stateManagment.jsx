import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

export const useStateManager = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export const Provider = ({ children, store }) => {
  const { reducers, initialStates } = store;

  const rootReducer = (state, action) => {
    let newReducer = {};
    let oldReducer = { ...Object?.values(reducers) };

    const reducerKeys = new Set();
    for (let key in oldReducer) {
      for (let innerKey in oldReducer[key]) {
        if (reducerKeys?.has(innerKey)) {
          throw new Error(`Duplicate key found in reducers: ${innerKey}`);
        }
        reducerKeys?.add(innerKey);
        newReducer[innerKey] = oldReducer[key][innerKey];
      }
    }

    const actionHandlers = { ...newReducer };
    const handler = actionHandlers?.[action?.type];
    if (handler) {
      return handler(state, action);
    }
    throw new Error(`Unhandled action type: ${action?.type}`);
  };

  let newStates = {};
  let oldStates = { ...Object?.values(initialStates) };

  const stateKeys = new Set();
  for (let key in oldStates) {
    for (let innerKey in oldStates[key]) {
      if (stateKeys?.has(innerKey)) {
        throw new Error(`Duplicate key found in initialStates: ${innerKey}`);
      }
      stateKeys?.add(innerKey);
      newStates[innerKey] = oldStates[key][innerKey];
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

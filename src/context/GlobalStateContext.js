import React, { createContext, useReducer } from 'react';
import initialState from './../../initialState';
import reducer from './../reducers/';

export const GlobalStateContext = createContext();

export const GlobalContextProvider = (props) => {
  const [state, setState] = useReducer(reducer, initialState);
  // console.log("State Changed", state);

  return (
    <GlobalStateContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

import React, { createContext, useReducer } from 'react';
import ContextDevTool from 'react-context-devtool';
import initialState from './../../initialState';
import reducer from './../reducers/';

export const GlobalStateContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={[state, setState]}>
      <ContextDevTool
        context={GlobalStateContext}
        id='uniqContextId'
        displayName='Context Garcitricos'
      />
      {children}
    </GlobalStateContext.Provider>
  );
};

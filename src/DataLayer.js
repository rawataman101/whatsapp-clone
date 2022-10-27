import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

// higher order component
export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
// reducer - listen to action
// inital state - what data looks like initial

//setup data layer
import React, { createContext, useContext, useReducer } from 'react';
//This is ther Data Layer
export const StateContext = createContext();


//Build A Provider

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how we use it inside components
export const useStateValue = () => useContext(StateContext)
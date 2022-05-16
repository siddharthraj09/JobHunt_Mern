import { useState, useReducer, useContext } from "react";
import React from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT } from "./action";

const initalState = {
  isLoading: "false",
  showAlert: "false",
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initalState);

  const displayAlert = () =>{
      dispatch({type:DISPLAY_ALERT})
  }

  return (
    <AppContext.Provider value={{ ...state,displayAlert }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,initalState,useAppContext}

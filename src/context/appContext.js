import { useState, useReducer, useContext } from "react";
import React from "react";

const initalState = {
  isLoading: "false",
  showAlert: "false",
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initalState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,initalState,useAppContext}

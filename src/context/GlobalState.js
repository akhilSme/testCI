import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    weatherData: [],
    city:"",
    user:{},
    signUpData:{},
    accessToken:localStorage.getItem("accessToken") || ""
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "accessToken",
      JSON.stringify(state.accessToken)
    );
  });

  const loginUser = loginData => {
    dispatch({
      type: "LOGIN_USER",
      payload: loginData
    });
  };

  const signUpUser = signUpData => {
    dispatch({
      type: "SIGNUP_USER",
      payload: signUpData
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        accessToken: state.accessToken,
        loginUser,
        signUpUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initalState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setIsClicked({ ...initalState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, handleClick ,screenSize,setScreenSize}}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
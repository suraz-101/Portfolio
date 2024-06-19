import { useState, createContext } from "react";

export const toggleContext = createContext(null);

export const ToggleContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState("light");
  return (
    <toggleContext.Provider value={{ toggle, setToggle }}>
      <div className={`${toggle}`}>{children}</div>
    </toggleContext.Provider>
  );
};

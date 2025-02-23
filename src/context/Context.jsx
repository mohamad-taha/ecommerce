import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("");
  const [count, setCount] = useState(1);

  return (
    <Context.Provider
      value={{
        showSidebar,
        setShowSidebar,
        query,
        setQuery,
        option,
        setOption,
        count,
        setCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

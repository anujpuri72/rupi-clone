import { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [inputProps, setInputProps] = useState({ checked: true, number: "" });

  const [heroVisible, setHeroVisible] = useState(false);

  return (
    <PageContext.Provider
      value={{
        inputProps,
        setInputProps,
        heroVisible,
        setHeroVisible,
      }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("usePageContext must be used in <PageContextProvider />");
  }

  return context;
};

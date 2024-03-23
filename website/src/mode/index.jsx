import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
const DarkModeContext = createContext({ mode: "system", setMode: () => {} });
const preferDarkQuery = "(prefers-color-scheme: dark)";
const mediaQueryEventTarget = typeof window !== "undefined" ? window.matchMedia(preferDarkQuery) : null;

export const DarkModeProvider = ({ children }) => {
  const [mode, setMode] = useLocalStorage("scheme-mode", "system");

  useEffect(() => {
    const listener = (e) => {
      if (mode === "system") setClassOnDocument(e.matches);
    };
    if (mediaQueryEventTarget) {
      mediaQueryEventTarget.addEventListener("change", listener);
      return () => {
        mediaQueryEventTarget.removeEventListener("change", listener);
      };
    }
    return () => {};
  }, [mode]);

  useEffect(() => {
    if (mode === "dark") return setClassOnDocument(true);
    if (mode === "light") return setClassOnDocument(false);
    setClassOnDocument(window.matchMedia(preferDarkQuery).matches);
  }, [mode]);
  const ProviderValues = useMemo(() => {
    return {
      mode,
      setMode,
    };
  }, [mode, setMode]);
  return <DarkModeContext.Provider value={ProviderValues}> {children} </DarkModeContext.Provider>;
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const setClassOnDocument = (darkTheme) => {
  const classNameDark = "dark-mode";
  const classNameLight = "light-mode";
  const element = typeof window !== "undefined" ? document.querySelector("html") : null;
  if (!element) return;
  element.classList.add(darkTheme ? classNameDark : classNameLight);
  element.classList.remove(darkTheme ? classNameLight : classNameDark);
};
export const useDarkMode = () => useContext(DarkModeContext);

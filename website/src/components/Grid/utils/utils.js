import { useState, useEffect } from "react";
import { getConfiguration } from "./config";

const getViewPort = (source) => {
  if (source && source.current && source.current.clientWidth) {
    return source.current.clientWidth;
  }
  return typeof window !== "undefined" ? window.innerWidth : null;
};

export const screenClasses = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"];

export const useScreenClass = (source, fallbackScreenClass) => {
  const getScreenClass = () => {
    const { breakpoints, defaultScreenClass, maxScreenClass } = getConfiguration();

    const viewport = getViewPort(source);

    let newScreenClass = fallbackScreenClass || defaultScreenClass;

    if (viewport !== null) {
      screenClasses.some((screenClass, index) => {
        if (breakpoints[index] && viewport >= breakpoints[index]) {
          newScreenClass = screenClass;
          return false;
        }
        return true;
      });
    }

    const maxScreenClassIndex = screenClasses.indexOf(maxScreenClass);
    if (maxScreenClassIndex >= 0) {
      const newScreenClassIndex = screenClasses.indexOf(newScreenClass);
      if (newScreenClassIndex > maxScreenClassIndex) {
        newScreenClass = screenClasses[maxScreenClassIndex];
      }
    }

    return newScreenClass;
  };

  const [screenClass, setScreenClass] = useState(getScreenClass);

  useEffect(() => {
    const handleWindowResized = () => setScreenClass(getScreenClass());

    window.addEventListener("resize", handleWindowResized);

    return () => {
      window.removeEventListener("resize", handleWindowResized);
    };
  }, []);

  return screenClass;
};

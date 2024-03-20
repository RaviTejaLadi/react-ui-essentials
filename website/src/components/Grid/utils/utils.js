// import { useState, useEffect } from "react";
// import { getConfiguration } from "./config";
// import { Window } from "../primitives";

// const getViewPort = (source) => {
//   if (source && source.current && source.current.clientWidth) {
//     return source.current.clientWidth;
//   }
//   if (typeof Window !== "undefined" && Window.innerWidth) {
//     return Window.innerWidth;
//   }
//   return null;
// };

// export const screenClasses = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"];

// export const useScreenClass = (source, fallbackScreenClass) => {
//   const getScreenClass = () => {
//     const { breakpoints, defaultScreenClass, maxScreenClass } = getConfiguration();

//     let newScreenClass = defaultScreenClass;

//     const viewport = getViewPort(source);
//     if (viewport) {
//       newScreenClass = "xs";
//       if (breakpoints[0] && viewport >= breakpoints[0]) newScreenClass = "sm";
//       if (breakpoints[1] && viewport >= breakpoints[1]) newScreenClass = "md";
//       if (breakpoints[2] && viewport >= breakpoints[2]) newScreenClass = "lg";
//       if (breakpoints[3] && viewport >= breakpoints[3]) newScreenClass = "xl";
//       if (breakpoints[4] && viewport >= breakpoints[4]) newScreenClass = "xxl";
//       if (breakpoints[5] && viewport >= breakpoints[5]) newScreenClass = "xxxl";
//     } else if (fallbackScreenClass) {
//       newScreenClass = fallbackScreenClass;
//     }

//     const newScreenClassIndex = screenClasses.indexOf(newScreenClass);
//     const maxScreenClassIndex = screenClasses.indexOf(maxScreenClass);
//     if (maxScreenClassIndex >= 0 && newScreenClassIndex > maxScreenClassIndex) {
//       newScreenClass = screenClasses[maxScreenClassIndex];
//     }

//     return newScreenClass;
//   };

//   const [screenClass, setScreenClass] = useState(() => getScreenClass());

//   useEffect(() => {
//     const handleWindowResized = () => setScreenClass(getScreenClass());

//     Window.addEventListener("resize", handleWindowResized, false);

//     return () => {
//       Window.removeEventListener("resize", handleWindowResized, false);
//     };
//   }, []);

//   return screenClass;
// };

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
          return false; // Break the loop
        }
        return true; // Continue the loop
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

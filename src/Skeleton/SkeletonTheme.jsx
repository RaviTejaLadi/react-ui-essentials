import React from "react";
import { SkeletonThemeContext } from "./SkeletonThemeContext.js";

const SkeletonTheme = ({ children, ...styleOptions }) => {
  return <SkeletonThemeContext.Provider value={styleOptions}>{children}</SkeletonThemeContext.Provider>;
};

export default SkeletonTheme;

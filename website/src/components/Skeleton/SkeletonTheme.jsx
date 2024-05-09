import React from "react";
import { SkeletonThemeContext } from "./SkeletonThemeContext.js";

export function SkeletonTheme({ children, ...styleOptions }) {
  return <SkeletonThemeContext.Provider value={styleOptions}>{children}</SkeletonThemeContext.Provider>;
}

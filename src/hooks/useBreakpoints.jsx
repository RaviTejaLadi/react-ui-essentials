import { useState, useEffect, useCallback } from "react";

const defaultBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
};

const getBreakpoint = (width, breakpoints) => {
  if (width >= breakpoints.xxxl) return "xxxl";
  if (width >= breakpoints.xxl) return "xxl";
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return "xs";
};

const useBreakpoints = (customBreakpoints = defaultBreakpoints) => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    breakpoint: typeof window !== "undefined" ? getBreakpoint(window.innerWidth, breakpoints) : "xs",
  });

  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    setScreenSize({
      width: newWidth,
      breakpoint: getBreakpoint(newWidth, breakpoints),
    });
  }, [breakpoints]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return screenSize;
};

export default useBreakpoints;
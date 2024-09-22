import React, { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Box.module.css";

const Box = forwardRef(
  (
    {
      width = "auto",
      height = "auto",
      shadow,
      rounded = false,
      children,
      outlined = false,
      className,
      margin = "0",
      padding = "0",
      color,
      backgroundColor,
      style,
      display = "block",
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      ...rest
    },
    ref
  ) => {
    const boxShadowValues = useMemo(() => {
      return {
        none: "0 0 #0000",
        normal: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        xxl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      };
    }, [shadow]);

    const boxShadow = boxShadowValues[shadow] || "none";

    const boxStyles = {
      display: display,
      flexDirection: flexDirection,
      flexWrap: flexWrap,
      justifyContent: justifyContent,
      alignContent: alignContent,
      alignItems: alignItems,
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      border: outlined ? "1px solid #e4e4e7" : "transperent",
      borderRadius: rounded ? "5px" : outlined ? "5px" : "0",
      boxShadow: outlined ? "" : boxShadow,
      color: color,
      backgroundColor: backgroundColor,
      ...style,
    };

    return (
      <div style={boxStyles} ref={ref} className={`${styles.rue_box} ${className || ""}`} {...rest}>
        {children}
      </div>
    );
  }
);

Box.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  height: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  outlined: PropTypes.bool,
  padding: PropTypes.string,
  rounded: PropTypes.bool,
  shadow: PropTypes.oneOf(["none", "normal", "sm", "md", "lg", "xl", "xxl", "inner"]),
  style: PropTypes.object,
  width: PropTypes.string,
};
Box.displayName = "Box";
export default Box;

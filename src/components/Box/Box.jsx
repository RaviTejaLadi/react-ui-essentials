import React, { forwardRef, memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Box.module.css";

const Box = forwardRef(
  (
    {
      width = "auto",
      height = "auto",
      elevation,
      rounded = false,
      children,
      outlined = false,
      className,
      margin = "0",
      padding = "0",
      color,
      backgroundColor,
      style = {},
      ...rest
    },
    ref
  ) => {
    const boxShadowValues = useMemo(() => {
      return {
        0: "",
        1: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
        2: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        6: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        8: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        12: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        24: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
      };
    }, [elevation]);

    const boxShadow = boxShadowValues[elevation] || "none";

    const boxStyles = {
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      border: outlined ? "1px solid #ccc" : "transperent",
      borderRadius: rounded ? "5px" : outlined ? "5px" : "0",
      boxShadow: outlined ? "" : boxShadow,
      color: color,
      backgroundColor: backgroundColor,
      ...style,
    };

    return (
      <div style={boxStyles} ref={ref} className={`${styles.rue_box} ${className}`} {...rest}>
        {children}
      </div>
    );
  }
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  elevation: PropTypes.number,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
  width: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default memo(Box);

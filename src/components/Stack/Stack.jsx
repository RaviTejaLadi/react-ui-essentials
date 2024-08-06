import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Stack.module.css";
import Box from "../Box/Box";

const Item = ({ children, className, style, ...rest }) => {
  return (
    <Box className={className} style={style} {...rest}>
      {children}
    </Box>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Stack = forwardRef(
  (
    {
      direction = "row",
      justifyContent = "start",
      alignItems = "stretch",
      alignContent = "stretch",
      flexWrap = "nowrap",
      spacing = 0,
      padding,
      className,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const classes = [
      styles.stack,
      styles[direction],
      styles[`justify${justifyContent.charAt(0).toUpperCase() + justifyContent.slice(1)}`],
      styles[`alignItems${alignItems.charAt(0).toUpperCase() + alignItems.slice(1)}`],
      styles[` alignContent${alignContent.charAt(0).toUpperCase() + alignContent.slice(1)}`],
      styles[flexWrap],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const inlineStyles = {
      gap: `${spacing}px`,
      padding,
      ...style,
    };

    return (
      <div ref={ref} className={classes} style={inlineStyles} {...rest}>
        {children}
      </div>
    );
  }
);

Stack.propTypes = {
  alignContent: PropTypes.oneOf(["start", "center", "end", "stretch"]),
  alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["row", "column"]),
  flexWrap: PropTypes.oneOf(["wrap", "nowrap"]),
  justifyContent: PropTypes.oneOf(["start", "center", "end", "between", "around"]),
  padding: PropTypes.string,
  spacing: PropTypes.number,
  style: PropTypes.object,
};

Stack.Item = Item;
Stack.displayName = "Stack";

export default Stack;

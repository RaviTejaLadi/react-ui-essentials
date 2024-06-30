import React, { memo, forwardRef } from "react";
import PropTypes from "prop-types";

const Item = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

const Stack = forwardRef(
  (
    {
      direction = "row",
      justifyContent = "flex-start",
      alignItems = "stretch",
      alignContent = "stretch",
      flexWrap = "nowrap",
      spacing = 0,
      padding,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const styles = {
      display: "flex",
      flexDirection: direction,
      justifyContent: justifyContent,
      alignItems: alignItems,
      alignContent: alignContent,
      flexWrap: flexWrap,
      gap: `${spacing}px`,
      padding: padding,
      ...style,
    };
    return (
      <div ref={ref} style={styles} {...rest}>
        {children}
      </div>
    );
  }
);

Stack.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.node,
  direction: PropTypes.string,
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
  padding: PropTypes.string,
  spacing: PropTypes.number,
  style: PropTypes.object,
};

Stack.Item = Item;

export default memo(Stack);

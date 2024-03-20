import React, { memo } from "react";
import PropTypes from "prop-types";

const Item = ({ children }) => {
  return <div>{children}</div>;
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

const Stack = ({
  direction,
  justifyContent,
  alignItems,
  alignContent,
  flexWrap,
  spacing,
  padding,
  style,
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        alignContent: alignContent,
        flexWrap: flexWrap,
        gap: `${spacing}px`,
        padding: padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

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

Stack.defaultProps = {
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch",
  flexWrap: "nowrap",
  spacing: 0,
};

Stack.Item = Item;

export default memo(Stack);

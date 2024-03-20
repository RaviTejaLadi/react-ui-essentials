import React from "react";
import PropTypes from "prop-types";

const Divider = ({ horizontal, color, content, contentPlacement }) => {
  const styles = {
    divider: {
      display: "flex",
      alignItems: "center",
      justifyContent: `${contentPlacement}`,
      flexGrow: 0,
      flexShrink: 0,
      backgroundColor: color || "gray",
      position: "relative",
    },
    horizontalDivider: {
      height: "1px",
      width: "100%",
      margin: ".3rem 0",
    },
  };

  const getDividerStyle = () => {
    if (horizontal) {
      return { ...styles.divider, ...styles.horizontalDivider };
    }
    return styles.divider;
  };

  return (
    <div style={getDividerStyle()}>
      <span style={{ position: "relative", zIndex: 1 }}>{content}</span>
    </div>
  );
};

Divider.propTypes = {
  color: PropTypes.string,
  content: PropTypes.node,
  contentPlacement: PropTypes.string,
  horizontal: PropTypes.bool.isRequired,
};

export default Divider;

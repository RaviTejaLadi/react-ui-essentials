import PropTypes from "prop-types";
import React from "react";

const Group = (props, { children, className }) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

Group.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Group.defaultProps = {
  className: "",
};

export default Group;

import PropTypes from "prop-types";
import React from "react";

const Group = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
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

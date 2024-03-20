import PropTypes from "prop-types";
import React from "react";

const DetailList = (props, { children, className }) => {
  return (
    <datalist {...props} className={className}>
      {children}
    </datalist>
  );
};
DetailList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
DetailList.defaultProps = {
  className: "",
};

export default DetailList;

import PropTypes from "prop-types";
import React from "react";

const DetailList = ({ children, className, ...rest }) => {
  return (
    <datalist className={className} {...rest}>
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

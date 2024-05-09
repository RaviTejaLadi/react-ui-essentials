import PropTypes from "prop-types";
import React from "react";

const OrderedList = ({ children, type, ...rest }) => {
  return (
    <ol type={type} {...rest}>
      {children}
    </ol>
  );
};

OrderedList.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

const ListItem = ({ children, ...rest }) => {
  return <li {...rest}>{children}</li>;
};

ListItem.propTypes = {
  children: PropTypes.any,
};

OrderedList.defaultProps = {
  type: "1",
};

OrderedList.Item = ListItem;
export default OrderedList;

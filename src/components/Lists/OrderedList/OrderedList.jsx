import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const OrderedList = forwardRef(({ children, type = 1, ...rest }, ref) => {
  return (
    <ol ref={ref} type={type} {...rest}>
      {children}
    </ol>
  );
});

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

OrderedList.Item = ListItem;
OrderedList.displayName = "OrderedList";
export default OrderedList;

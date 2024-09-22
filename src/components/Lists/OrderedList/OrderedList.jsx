import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./OrderedList.module.css";

const OrderedList = forwardRef(({ children, type = "1", className, style, ...rest }, ref) => {
  return (
    <ol ref={ref} type={type} className={`${styles.rue_orderedList} ${className || ""}`} style={style} {...rest}>
      {children}
    </ol>
  );
});

OrderedList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(["1", "a", "A", "i", "I"]),
};

const ListItem = ({ children, className, style, ...rest }) => {
  return (
    <li className={`${styles.rue_listItem} ${className || ""}`} style={style} {...rest}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

OrderedList.Item = ListItem;
OrderedList.displayName = "OrderedList";
export default OrderedList;

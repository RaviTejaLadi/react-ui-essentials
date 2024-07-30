import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./OrderedList.module.css";

const OrderedList = forwardRef(({ children, type = "1", ...rest }, ref) => {
  return (
    <ol ref={ref} type={type} className={styles.rue_orderedList} {...rest}>
      {children}
    </ol>
  );
});

OrderedList.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["1", "a", "A", "i", "I"]),
};

const ListItem = ({ children, ...rest }) => {
  return (
    <li className={styles.rue_listItem} {...rest}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

OrderedList.Item = ListItem;
OrderedList.displayName = "OrderedList";
export default OrderedList;

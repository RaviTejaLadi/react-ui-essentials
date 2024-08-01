import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./UnOrderedList.module.css";

const UnOrderedList = forwardRef(({ children, type = "disc", ...rest }, ref) => {
  return (
    <ul ref={ref} className={styles.rue_unorderedList} style={{ listStyleType: type }} {...rest}>
      {children}
    </ul>
  );
});

UnOrderedList.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["disc", "circle", "square", "none"]),
};

const ListItem = ({ children, ...rest }) => {
  return (
    <li className={styles.rue_listItem} {...rest}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.any,
};

UnOrderedList.Item = ListItem;
UnOrderedList.displayName = "UnorderedList";
export default UnOrderedList;

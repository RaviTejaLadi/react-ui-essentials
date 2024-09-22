import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./UnOrderedList.module.css";

const UnOrderedList = forwardRef(({ children, type = "disc", className, style, ...rest }, ref) => {
  const unOrderStyles = {
    listStyleType: type,
    ...style,
  };
  return (
    <ul ref={ref} className={`${styles.rue_unorderedList} ${className || ""}`} style={unOrderStyles} {...rest}>
      {children}
    </ul>
  );
});

UnOrderedList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(["disc", "circle", "square", "none"]),
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

UnOrderedList.Item = ListItem;
UnOrderedList.displayName = "UnorderedList";
export default UnOrderedList;

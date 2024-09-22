import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./ListGropus.module.css";

const ListGroups = forwardRef(({ width, items, size = "sm", variant = "primary", className, style, ...rest }, ref) => {
  const getSizeClassName = () => {
    return styles[`rue_list_group_${size}`] || styles.rue_list_group_sm;
  };

  const getVariantClassName = () => {
    return styles[`rue_list_group_item_${variant}`] || styles.rue_list_group_item_primary;
  };
  const listStyles = {
    width: width,
    ...style,
  };
  return (
    <ul
      ref={ref}
      className={`${styles.rue_list_group} ${getSizeClassName()} ${className || ""}`}
      style={listStyles}
      {...rest}
    >
      {items?.map((item, index) => (
        <li key={index} className={`${styles.rue_list_group_item}  ${getVariantClassName()}`} onClick={item?.func}>
          <span style={{ marginRight: "8px" }}>{item?.icon}</span> {item?.label}
        </li>
      ))}
    </ul>
  );
});

ListGroups.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.string,
  width: PropTypes.string,
};

ListGroups.displayName = "ListGroups";
export default ListGroups;

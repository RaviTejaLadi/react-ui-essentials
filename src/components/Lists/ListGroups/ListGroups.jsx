import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./ListGropus.module.css";

const ListGroups = forwardRef(({ width, items, size = "sm", variant = "primary", ...rest }, ref) => {
  const getSizeClassName = () => {
    return styles[`rue_list_group_${size}`] || styles.rue_list_group_sm;
  };

  const getVariantClassName = () => {
    return styles[`rue_list_group_item_${variant}`] || styles.rue_list_group_item_primary;
  };

  return (
    <ul ref={ref} style={{ width: width }} className={`${styles.rue_list_group} ${getSizeClassName()}`} {...rest}>
      {items?.map((item, index) => (
        <li key={index} className={`${styles.rue_list_group_item}  ${getVariantClassName()}`} onClick={item?.func}>
          <span style={{ marginRight: "8px" }}>{item?.icon}</span> {item?.label}
        </li>
      ))}
    </ul>
  );
});

ListGroups.propTypes = {
  width: PropTypes.string,
  items: PropTypes.array.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
};

ListGroups.displayName = "ListGroups";
export default ListGroups;

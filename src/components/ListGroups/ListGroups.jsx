import PropTypes from "prop-types";
import React from "react";
import styles from "./ListGropus.module.css";

const ListGroups = ({ width, items, size, variant }) => {
  const getSizeClassName = () => {
    switch (size) {
      case "sm":
        return styles.rue_list_group_sm;
      case "md":
        return styles.rue_list_group_md;
      case "lg":
        return styles.rue_list_group_lg;
      case "xl":
        return styles.rue_list_group_xl;
      case "xxl":
        return styles.rue_list_group_xxl;
      default:
        return "";
    }
  };

  const getVariantClassName = () => {
    switch (variant) {
      case "primary":
        return styles.rue_list_group_item_primary;
      case "secondary":
        return styles.rue_list_group_item_secondary;
      case "success":
        return styles.rue_list_group_item_success;
      case "danger":
        return styles.rue_list_group_item_danger;
      case "warning":
        return styles.rue_list_group_item_warning;
      case "info":
        return styles.rue_list_group_item_info;
      case "light":
        return styles.rue_list_group_item_light;
      case "dark":
        return styles.rue_list_group_item_dark;
      default:
        return "";
    }
  };

  return (
    <ul style={{ width: width }} className={`${styles.rue_list_group} ${getSizeClassName()}`}>
      {items?.map((item, index) => (
        <li key={index} className={`${styles.rue_list_group_item} ${getVariantClassName()}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

ListGroups.propTypes = {
  width: PropTypes.string,
  items: PropTypes.array.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
};

export default ListGroups;

// import PropTypes from "prop-types";
// import React from "react";
// import "./ScrollSpyListGroups.css";
// import { Link } from "react-router-dom";

// const ScrollSpyListGroups = ({ items, size, variant, scrollToBookmark }) => {
//   const getSizeClassName = () => {
//     switch (size) {
//       case "sm":
//         return "Scroll-Spy-list-group-sm";
//       case "lg":
//         return "Scroll-Spy-list-group-lg";
//       default:
//         return "";
//     }
//   };

//   const getVariantClassName = () => {
//     switch (variant) {
//       case "primary":
//         return "Scroll-Spy-list-group-item-primary";
//       case "secondary":
//         return "Scroll-Spy-list-group-item-secondary";
//       case "success":
//         return "Scroll-Spy-list-group-item-success";
//       case "danger":
//         return "Scroll-Spy-list-group-item-danger";
//       case "warning":
//         return "Scroll-Spy-list-group-item-warning";
//       case "info":
//         return "Scroll-Spy-list-group-item-info";
//       case "light":
//         return "Scroll-Spy-list-group-item-light";
//       case "dark":
//         return "Scroll-Spy-list-group-item-dark";
//       default:
//         return "";
//     }
//   };
//   const onPress = (e) => {
//     e.preventDefault();
//     const target = window.document.getElementById(
//       e.currentTarget.href.split("#")[1]
//     );
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <ul className={`Scroll-Spy-list-group ${getSizeClassName()}`}>
//       {items.map((item) => (
//         <li
//           key={item.id}
//           className={`Scroll-Spy-list-group-item ${getVariantClassName()}`}
//         >
//           <Link to={item.linkid} onClick={(e) => onPress(e)}>
//             <span data-to-scrollspy-id={item.linkid.replace("#", "")}>
//               👉🏻 {item.branch}
//             </span>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// ScrollSpyListGroups.propTypes = {
//   items: PropTypes.shape({
//     map: PropTypes.func,
//   }),
//   scrollToBookmark: PropTypes.any,
//   size: PropTypes.any,
//   variant: PropTypes.any,
// };

// export default ScrollSpyListGroups;

import PropTypes from "prop-types";
import React from "react";
import styles from "./ScrollSpyListGroups.module.css";
import { Link } from "react-router-dom";

const ScrollSpyListGroups = ({ width, items, size, variant }) => {
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

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(e.currentTarget.href.split("#")[1]);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul style={{ width: width }} className={`${styles.rue_list_group} ${getSizeClassName()}`}>
      {items?.map((item, index) => (
        <li key={index} className={`${styles.rue_list_group_item} ${getVariantClassName()}`}>
          <Link to={item.linkid} onClick={(e) => onPress(e)}>
            <span data-to-scrollspy-id={item.linkid.replace("#", "")}>{item.branch}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

ScrollSpyListGroups.propTypes = {
  width: PropTypes.string,
  items: PropTypes.array.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
};

export default ScrollSpyListGroups;

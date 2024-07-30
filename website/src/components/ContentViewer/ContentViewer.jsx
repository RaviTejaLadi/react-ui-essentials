import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styles from "./ContentViewer.module.css";
import Divider from "../Components/Divider/Divider";
import Description from "./Description";
import Folder from "./Folder";
import FolderOpen from "./FolderOpen";
import ExpandMore from "./ExpandMore";
import ExpandLess from "./ExpandLess";

const ContentViewer = ({ data, header, width, height, margin }) => {
  const [selectedItem, setSelectedItem] = useState(data?.length > 0 ? data[0]?.label : null);
  const [content, setContent] = useState(data?.length > 0 ? data[0]?.content : "");
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    const selectedItemData = data?.find((item) => item.label === selectedItem);
    if (selectedItemData) {
      setContent(selectedItemData.content);
    }
  }, [selectedItem, data]);

  const handleItemClick = (item) => {
    setSelectedItem(item.label);
    toggleItemExpansion(item.id);
  };

  const toggleItemExpansion = (itemId) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems?.includes(itemId)) {
        return prevExpandedItems?.filter((id) => id !== itemId);
      } else {
        return [...prevExpandedItems, itemId];
      }
    });
  };

  const renderSidebarItems = (items) => {
    return items?.map((item) => (
      <span key={item.id} className={`${styles.rue_sidebar_item} ${selectedItem === item.label ? styles.active : ""}`}>
        <div
          className={`${styles.rue_item_label} ${expandedItems?.includes(item.id) ? styles.expanded : ""}`}
          onClick={() => handleItemClick(item)}
        >
          <span className={selectedItem === item.label ? styles.rue_child_item : ""} />
          <span className={styles.rue_label_text}>
            {item.type === "folder" ? (
              expandedItems?.includes(item.id) ? (
                <FolderOpen width="18px" height="18px" style={{ marginRight: "4px", marginBottom: "-5px" }} />
              ) : (
                <Folder width="18px" height="18px" style={{ marginRight: "4px", marginBottom: "-5px" }} />
              )
            ) : (
              <Description width="18px" height="18px" style={{ marginRight: "4px", marginBottom: "-5px" }} />
            )}
            <code>{item.label}</code>
          </span>
          {item.children && (
            <span
              className={`${styles.rue_toggle_icon} ${expandedItems?.includes(item.id) ? styles.expanded : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleItemExpansion(item.id);
              }}
            >
              {expandedItems?.includes(item.id) ? (
                <ExpandLess width="24px" height="24px" />
              ) : (
                <ExpandMore width="24px" height="24px" />
              )}
            </span>
          )}
        </div>
        {item.children && expandedItems?.includes(item.id) && (
          <div className={styles.rue_nested_items}>
            <code>{renderSidebarItems(item.children)}</code>
          </div>
        )}
      </span>
    ));
  };

  return (
    <div className={styles.rue_ContentViewer_wrapper} style={{ width: width, height: height, margin: margin }}>
      <div className={styles.rue_contentViewer_header}>{header}</div>
      <Divider />
      <div className={styles.rue_contentViewer_body}>
        <div className={styles.rue_contentViewer_sidebar}>
          <div>{renderSidebarItems(data)}</div>
        </div>
        <Divider orientation="vertical" />
        <div className={styles.rue_contentViewer_content_wrapper}>
          <div className={styles.rue_contentViewer_content_header}>
            <code>{selectedItem}</code>
          </div>
          <Divider />
          <div className={styles.rue_contentViewer_content}>{content}</div>
        </div>
      </div>
    </div>
  );
};

ContentViewer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
};

export default ContentViewer;

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Tag.module.css";

const Tag = forwardRef(({ children, variant = "primary", size = "sm", ...rest }, ref) => {
  const classNames = `${styles.rue_tag} ${styles[`rue_tag_${variant}`]} ${styles[`rue_tag_${size}`]}`;

  return (
    <span ref={ref} className={classNames} {...rest}>
      {children}
    </span>
  );
});

const TagIcon = ({ children, ...props }) => (
  <span className={styles.rue_tag_icon} {...props}>
    {children}
  </span>
);

TagIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

const TagText = ({ children, ...props }) => (
  <span className={styles.rue_tag_text} {...props}>
    {children}
  </span>
);

TagText.propTypes = {
  children: PropTypes.node.isRequired,
};

const TagCloseButton = ({ onClick, ...props }) => (
  <button className={styles.rue_tag_close_button} onClick={onClick} {...props}>
    &times;
  </button>
);

TagCloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]),
};

Tag.displayName = "Tag";
Tag.Icon = TagIcon;
Tag.Text = TagText;
Tag.CloseButton = TagCloseButton;

export default Tag;

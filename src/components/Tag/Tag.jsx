import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Tag.module.css";

const Tag = forwardRef(({ children, variant = "primary", size = "sm", className, style, ...rest }, ref) => {
  const classNames = `${styles.rue_tag} ${styles[`rue_tag_${variant}`]} ${styles[`rue_tag_${size}`]} ${
    className || ""
  }`;

  return (
    <span ref={ref} className={classNames} style={style} {...rest}>
      {children}
    </span>
  );
});

const TagIcon = ({ children, className, style, ...props }) => (
  <span className={`${styles.rue_tag_icon} ${className || ""}`} style={style} {...props}>
    {children}
  </span>
);

TagIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const TagText = ({ children, className, style, ...props }) => (
  <span className={`${styles.rue_tag_text} ${className || ""}`} style={style} {...props}>
    {children}
  </span>
);

TagText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const TagCloseButton = ({ onClick, className, style, ...props }) => (
  <button className={`${styles.rue_tag_close_button} ${className || ""}`} style={style} onClick={onClick} {...props}>
    &times;
  </button>
);

TagCloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

Tag.displayName = "Tag";
Tag.Icon = TagIcon;
Tag.Text = TagText;
Tag.CloseButton = TagCloseButton;

export default Tag;

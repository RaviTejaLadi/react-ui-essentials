import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Link.module.css";

const Link = forwardRef(({ to, children, target, rel, className, onClick, ...rest }, ref) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (!event.defaultPrevented) {
      event.preventDefault();
      window.history.pushState({}, "", to);
      window.dispatchEvent(new Event("popstate"));
    }
  };

  const combinedClassName = `${styles.link} ${className || ""}`;

  return (
    <a
      ref={ref}
      href={to}
      onClick={handleClick}
      target={target}
      rel={target === "_blank" && !rel ? "noopener noreferrer" : rel}
      className={combinedClassName}
      {...rest}
    >
      {children}
    </a>
  );
});

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
};

Link.displayName = "Link";

export default Link;

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Link.module.css";

const Link = forwardRef(
  ({ to, children, target, rel, className, onClick, download, hrefLang, ping, referrerPolicy, type, ...rest }, ref) => {
    const isExternal = /^(https?:\/\/|mailto:|tel:)/.test(to);

    const handleClick = (event) => {
      if (onClick) {
        onClick(event);
      }
      if (!event.defaultPrevented && !isExternal) {
        event.preventDefault();
        window.history.pushState({}, "", to);
        window.dispatchEvent(new Event("popstate"));
      }
    };

    const combinedClassName = `${styles.link} ${className || ""}`;

    return (
      <a
        href={to}
        ref={ref}
        target={target}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={combinedClassName}
        onClick={handleClick}
        download={download}
        hrefLang={hrefLang}
        ping={ping}
        referrerPolicy={referrerPolicy}
        type={type}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  hrefLang: PropTypes.string,
  ping: PropTypes.string,
  referrerPolicy: PropTypes.string,
  type: PropTypes.string,
};

Link.displayName = "Link";

export default Link;

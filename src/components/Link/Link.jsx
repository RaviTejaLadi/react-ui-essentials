import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Link = forwardRef(({ to, children, target, rel, className, onClick, ...rest }, ref) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick(event);
    }
    window.history.pushState({}, "", to);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <a ref={ref} href={to} onClick={handleClick} target={target} rel={rel} className={className} {...rest}>
      {children}
    </a>
  );
});

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Link.displayName = "Link";
export default Link;

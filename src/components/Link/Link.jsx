import React, { memo } from "react";
import PropTypes from "prop-types";

const Link = ({ to, target, rel, className, children, onClick }, props) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={to} target={target} rel={rel} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  target: PropTypes.string,
};

Link.defaultProps = {
  className: "",
  to: "",
  onClick: () => {},
  rel: "",
  target: "",
};

export default memo(Link);

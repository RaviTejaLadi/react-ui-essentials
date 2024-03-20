import PropTypes from "prop-types";
import React from "react";

const Typography = ({
  variant = "p",
  underline,
  overline,
  dashed,
  italic,
  strong,
  strikethrough,
  marked,
  smaller,
  deleted,
  inserted,
  children,
}) => {
  const validVariants = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
  const Component = validVariants.includes(variant) ? variant : "p";

  const style = {
    textDecoration: underline
      ? "underline "
      : overline
      ? "overline "
      : dashed
      ? "line-through "
      : strikethrough
      ? "line-through "
      : deleted
      ? "line-through "
      : inserted
      ? "underline "
      : "",
    fontStyle: italic ? "italic " : "",
    fontWeight: strong ? "bold " : "",
    backgroundColor: marked ? "yellow " : "",
    fontSize: smaller ? "0.8em " : "",
    width:"fit-content"
  };

  return <Component style={style}>{children}</Component>;
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"]),
  underline: PropTypes.bool,
  overline: PropTypes.bool,
  dashed: PropTypes.bool,
  italic: PropTypes.bool,
  strong: PropTypes.bool,
  strikethrough: PropTypes.bool,
  marked: PropTypes.bool,
  smaller: PropTypes.bool,
  deleted: PropTypes.bool,
  inserted: PropTypes.bool,
};

export default Typography;

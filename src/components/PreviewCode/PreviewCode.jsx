import PropTypes from "prop-types";
import React, { memo } from "react";
import Box from "../Box/Box";

const PreviewCode = ({ children, width }) => {
  return (
    <Box elevation={2} width={width} outlined>
      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
        {children.split(/\r?\n/).map((content, i, arr) => (
          <code style={{ color: "red" }} key={i}>
            <span>{content}</span>
            {i < arr.length - 1 ? "\n" : null}
          </code>
        ))}
      </pre>
    </Box>
  );
};

PreviewCode.propTypes = {
  children: PropTypes.shape({
    split: PropTypes.func.isRequired,
    trim: PropTypes.func.isRequired,
  }),
  width: PropTypes.string,
};

PreviewCode.defaultProps = {
  width: "auto",
};

export default memo(PreviewCode);

import PropTypes from "prop-types";
import React, { memo, forwardRef } from "react";
import Box from "../Box/Box";

const PreviewCode = forwardRef(({ children, width = "auto", ...rest }, ref) => {
  return (
    <Box ref={ref} elevation={2} width={width} outlined {...rest}>
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
});

PreviewCode.propTypes = {
  children: PropTypes.shape({
    split: PropTypes.func.isRequired,
    trim: PropTypes.func.isRequired,
  }),
  width: PropTypes.string,
};
PreviewCode.displayName = "PreviewCode";
export default memo(PreviewCode);

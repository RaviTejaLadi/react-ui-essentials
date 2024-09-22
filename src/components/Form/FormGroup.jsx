import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import Box from "../Box/Box";

const FormGroup = forwardRef(({ children, className="", style={}, margin = "0 0 20px 0", padding, ...props }, ref) => {
  return (
    <Box ref={ref} margin={margin} padding={padding} className={className} style={style} {...props}>
      {children}
    </Box>
  );
});

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  style: PropTypes.object,
};
FormGroup.displayName = "FormGroup";
export default FormGroup;

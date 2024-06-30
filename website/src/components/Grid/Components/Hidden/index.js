import React from "react";
import PropTypes from "prop-types";
import * as style from "./style";
import GridResolver from "../../context/GridResolver";

const Hidden = ({ children, xs, sm, md, lg, xl, xxl, xxxl }) => (
  <GridResolver>
    {(screenClass) =>
      style.hidden({
        screenClass,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        xxxl,
      })
        ? null
        : children
    }
  </GridResolver>
);

Hidden.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  xxxl: PropTypes.bool,
};

Hidden.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  xxxl: false,
};

export default Hidden;

import React from "react";
import PropTypes from "prop-types";
import * as style from "./style";
import GridResolver from "../../context/GridResolver";

const Visible = ({ children, xs, sm, md, lg, xl, xxl, xxxl }) => (
  <GridResolver>
    {(screenClass) =>
      !style.visible({
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

Visible.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  xxxl: PropTypes.bool,
};

Visible.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  xxxl: false,
};

export default Visible;

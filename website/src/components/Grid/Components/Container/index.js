import React, { createElement } from "react";
import PropTypes from "prop-types";
import getStyle from "./style";
import { getConfiguration } from "../../utils/config";
import GridResolver from "../../context/GridResolver";
import { Div } from "../../primitives";

const Container = React.forwardRef(
  ({ children, fluid, xs, sm, md, lg, xl, xxl, xxxl, style, component: Component = Div, ...otherProps }, ref) => (
    <GridResolver>
      {(screenClass) => (
        <Component
          ref={ref}
          style={getStyle({
            fluid,
            xs,
            sm,
            md,
            lg,
            xl,
            xxl,
            xxxl,
            screenClass,
            containerWidths: getConfiguration().containerWidths,
            gutterWidth: getConfiguration().gutterWidth,
            moreStyle: style,
          })}
          {...otherProps}
        >
          {children}
        </Component>
      )}
    </GridResolver>
  )
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  xxxl: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  component: PropTypes.elementType,
};

Container.defaultProps = {
  fluid: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  xxxl: false,
  style: {},
  component: Div,
};

Container.displayName = "Container";

export default Container;

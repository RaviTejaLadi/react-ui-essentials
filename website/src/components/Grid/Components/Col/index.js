import React from "react";
import PropTypes from "prop-types";
import getStyle from "./style";
import { getConfiguration } from "../../utils/config";
import { GutterWidthContext } from "../Row";
import GridResolver from "../../context/GridResolver";
import { Div } from "../../primitives";

const Col = React.forwardRef(
  (
    {
      children,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      xxxl,
      offset,
      pull,
      push,
      order,
      debug,
      style,
      component: Component = Div,
      width,
      ...otherProps
    },
    ref
  ) => (
    <GridResolver>
      {(screenClass) => (
        <GutterWidthContext.Consumer>
          {(gutterWidth) => {
            const computedStyle = getStyle({
              forceWidth: width,
              width: { xs, sm, md, lg, xl, xxl, xxxl },
              offset,
              pull,
              push,
              order,
              debug,
              screenClass,
              gutterWidth,
              gridColumns: getConfiguration().gridColumns,
              moreStyle: style,
            });
            return (
              <Component ref={ref} style={computedStyle} {...otherProps}>
                {children}
              </Component>
            );
          }}
        </GutterWidthContext.Consumer>
      )}
    </GridResolver>
  )
);

Col.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["content"])]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["content"])]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["content"])]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["content"])]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["content"])]),
  xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["content"])]),
  xxxl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["content"])]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offset: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number,
    xxxl: PropTypes.number,
  }),
  push: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number,
    xxxl: PropTypes.number,
  }),
  pull: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number,
    xxxl: PropTypes.number,
  }),
  order: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number,
    xxxl: PropTypes.number,
  }),
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  debug: PropTypes.bool,
  component: PropTypes.elementType,
};

Col.defaultProps = {
  children: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null,
  xxxl: null,
  width: null,
  offset: {},
  push: {},
  pull: {},
  style: {},
  order: {},
  debug: false,
  component: Div,
};

Col.displayName = "Col";

export default Col;

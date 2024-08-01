import React from "react";
import PropTypes from "prop-types";
import { getConfiguration } from "../../utils/config";
import getStyle from "./style";
import { Div } from "../../primitives";

export const GutterWidthContext = React.createContext(false);

const Row = React.forwardRef(
  (
    {
      align = "normal",
      justify = "start",
      direction = "row",
      wrap = "wrap",
      nogutter = false,
      style = {},
      debug = false,
      children,
      gutterWidth: customGutterWidth,
      component: Component = Div,
      ...otherProps
    },
    ref
  ) => {
    let gutterWidth = getConfiguration().gutterWidth;
    if (nogutter) gutterWidth = 0;
    if (typeof customGutterWidth === "number") gutterWidth = customGutterWidth;

    const computedStyle = getStyle({
      gutterWidth,
      align,
      justify,
      debug,
      moreStyle: style,
      direction,
      wrap,
    });

    return (
      <Component ref={ref} style={computedStyle} {...otherProps}>
        <GutterWidthContext.Provider value={gutterWidth}>{children}</GutterWidthContext.Provider>
      </Component>
    );
  }
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["normal", "start", "center", "end", "stretch"]),
  justify: PropTypes.oneOf(["start", "center", "end", "between", "around", "initial", "inherit"]),
  direction: PropTypes.oneOf(["column", "row", "column-reverse", "row-reverse"]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "reverse"]),
  nogutter: PropTypes.bool,
  gutterWidth: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  debug: PropTypes.bool,
  component: PropTypes.elementType,
};

Row.displayName = "Row";

export default Row;

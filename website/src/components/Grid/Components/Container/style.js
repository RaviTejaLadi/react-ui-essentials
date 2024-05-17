export default ({ fluid, xs, sm, md, lg, xl, xxl, xxxl, screenClass, containerWidths, gutterWidth, moreStyle }) => {
  const styles = {
    boxSizing: "border-box",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: gutterWidth / 2,
    paddingRight: gutterWidth / 2,
  };

  if (fluid && !(xs || sm || md || lg || xl)) {
    return { ...styles, ...moreStyle };
  }

  const breakpoints = { xs, sm, md, lg, xl, xxl, xxxl };
  const breakpointIndex = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].indexOf(screenClass);
  const maxWidth = containerWidths[breakpointIndex];

  if (maxWidth && breakpoints[screenClass] === undefined) {
    styles.maxWidth = maxWidth;
  }

  return { ...styles, ...moreStyle };
};

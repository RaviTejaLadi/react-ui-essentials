export default ({ gutterWidth, align, justify, debug, moreStyle, direction, wrap, spacing }) => {
  const alignItems =
    {
      start: "flex-start",
      end: "flex-end",
    }[align] || align;

  const justifyContent =
    {
      start: "flex-start",
      end: "flex-end",
      between: "space-between",
      around: "space-around",
      center: "center",
      initial: "initial",
      inherit: "inherit",
    }[justify] || justify;

  const flexDirection = ["column", "row", "column-reverse", "row-reverse"].includes(direction) ? direction : undefined;

  const flexWrap =
    {
      nowrap: "nowrap",
      wrap: "wrap",
      reverse: "wrap-reverse",
    }[wrap] || wrap;

  const styles = {
    marginLeft: -gutterWidth / 2,
    marginRight: -gutterWidth / 2,
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap,
    gap: spacing,
  };

  if (debug) {
    styles.background = "rgba(128,128,128,.05)";
    styles.gap = "10px";
  }

  return { ...styles, ...moreStyle };
};

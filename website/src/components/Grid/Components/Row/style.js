// export default ({
//   gutterWidth, align, justify, debug, moreStyle, direction, wrap
// }) => {
//   // Vertical alignment
//   let alignItems = align;
//   if (align === 'start') alignItems = 'flex-start';
//   if (align === 'end') alignItems = 'flex-end';

//   // Horizontal alignment
//   let justifyContent = justify;
//   if (justify === 'start') justifyContent = 'flex-start';
//   if (justify === 'end') justifyContent = 'flex-end';
//   if (justify === 'between') justifyContent = 'space-between';
//   if (justify === 'around') justifyContent = 'space-around';
//   if (justify === 'center') justifyContent = 'center';
//   if (justify === 'initial') justifyContent = 'initial';
//   if (justify === 'inherit') justifyContent = 'inherit';

//   const flexDirection = ['column', 'row', 'column-reverse', 'row-reverse'].includes(direction) ? direction : undefined;

//   let flexWrap = wrap;
//   if (wrap === 'nowrap') flexWrap = 'nowrap';
//   if (wrap === 'wrap') flexWrap = 'wrap';
//   if (wrap === 'reverse') flexWrap = 'wrap-reverse';

//   const styles = {
//     marginLeft: -gutterWidth / 2,
//     marginRight: -gutterWidth / 2,
//     display: 'flex',
//     flexGrow: 0,
//     flexShrink: 0,
//     alignItems,
//     justifyContent,
//     flexDirection,
//     flexWrap
//   };

//   if (debug) {
//     styles.background = 'rgba(128,128,128,.05)';
//   }

//   return { ...styles, ...moreStyle };
// };

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

// import { screenClasses } from "../../utils/utils";

// const hasWidth = (widths) => Object.keys(widths).reduce((acc, cur) => acc || widths[cur], false);

// const getWidth = (width, gridColumns) => {
//   if (typeof width !== "number") return undefined;
//   const normalizedWidth = Math.max(0, Math.min(gridColumns, width));
//   return `${(100 / gridColumns) * normalizedWidth}%`;
// };

// export default ({
//   forceWidth = null,
//   width = {},
//   offset = {},
//   pull = {},
//   push = {},
//   order = {},
//   debug,
//   screenClass,
//   gutterWidth,
//   moreStyle,
//   gridColumns,
// }) => {
//   const styles = {
//     boxSizing: "border-box",
//     minHeight: 1,
//     position: "relative",
//     paddingLeft: gutterWidth / 2,
//     paddingRight: gutterWidth / 2,
//     width: "100%",
//   };

//   if (debug) {
//     styles.outline = "1px solid #712cf94d";
//     styles.background = "#712cf926";
//     styles.lineHeight = "32px";
//   }

//   styles.flexBasis = "100%";
//   styles.flexGrow = 0;
//   styles.flexShrink = 0;
//   styles.maxWidth = "100%";
//   styles.marginLeft = "0%";
//   styles.right = "auto";
//   styles.left = "auto";

//   screenClasses.forEach((size, index) => {
//     if (screenClasses.indexOf(screenClass) >= index) {
//       const currentWidth = getWidth(width[size], gridColumns);
//       const isSizedToContent = width[size] === "content";

//       styles.flexBasis = isSizedToContent ? "auto" : currentWidth || styles.flexBasis;
//       styles.width = styles.flexBasis;
//       styles.maxWidth = currentWidth || styles.maxWidth;
//       styles.marginLeft = getWidth(offset[size], gridColumns) || styles.marginLeft;
//       styles.right = getWidth(pull[size], gridColumns) || styles.right;
//       styles.left = getWidth(push[size], gridColumns) || styles.left;
//       if (order[size]) {
//         styles.order = order[size];
//       }
//     }
//   });

//   if (!hasWidth(width)) {
//     styles.flexBasis = 0;
//     styles.flexGrow = 1;
//   }

//   if (forceWidth) {
//     styles.flexBasis = "unset";
//     styles.flexGrow = "unset";
//     styles.flexShrink = "unset";
//     styles.width = forceWidth;
//   }

//   return { ...styles, ...moreStyle };
// };

import { screenClasses } from "../../utils/utils";

const hasWidth = (widths) => Object.values(widths).some(Boolean);

const getWidth = (width, gridColumns) => {
  if (typeof width !== "number") return undefined;
  const normalizedWidth = Math.max(0, Math.min(gridColumns, width));
  return `${(100 / gridColumns) * normalizedWidth}%`;
};

export default ({
  forceWidth = null,
  width = {},
  offset = {},
  pull = {},
  push = {},
  order = {},
  debug,
  screenClass,
  gutterWidth,
  moreStyle,
  gridColumns,
}) => {
  const styles = {
    boxSizing: "border-box",
    minHeight: 1,
    position: "relative",
    paddingLeft: gutterWidth / 2,
    paddingRight: gutterWidth / 2,
    width: "100%",
  };

  if (debug) {
    Object.assign(styles, {
      outline: "1px solid #712cf94d",
      background: "#712cf926",
      lineHeight: "32px",
      borderRadius:"5px",
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    });
  }

  styles.flexBasis = "100%";
  styles.flexGrow = 0;
  styles.flexShrink = 0;
  styles.maxWidth = "100%";
  styles.marginLeft = "0%";
  styles.right = "auto";
  styles.left = "auto";

  screenClasses.forEach((size, index) => {
    if (screenClasses.indexOf(screenClass) >= index) {
      const currentWidth = getWidth(width[size], gridColumns);
      const isSizedToContent = width[size] === "content";

      Object.assign(styles, {
        flexBasis: isSizedToContent ? "auto" : currentWidth || styles.flexBasis,
        width: styles.flexBasis,
        maxWidth: currentWidth || styles.maxWidth,
        marginLeft: getWidth(offset[size], gridColumns) || styles.marginLeft,
        right: getWidth(pull[size], gridColumns) || styles.right,
        left: getWidth(push[size], gridColumns) || styles.left,
      });

      if (order[size]) {
        styles.order = order[size];
      }
    }
  });

  if (!hasWidth(width)) {
    Object.assign(styles, {
      flexBasis: 0,
      flexGrow: 1,
    });
  }

  if (forceWidth) {
    Object.assign(styles, {
      flexBasis: "unset",
      flexGrow: "unset",
      flexShrink: "unset",
      width: forceWidth,
    });
  }

  return { ...styles, ...moreStyle };
};

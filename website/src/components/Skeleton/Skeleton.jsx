import PropTypes from "prop-types";
import React from "react";
import { SkeletonThemeContext } from "./SkeletonThemeContext.js";
const defaultEnableAnimation = true;
import styles from "./Skeleton.module.css";

function styleOptionsToCssProperties({
  baseColor,
  highlightColor,
  width,
  height,
  borderRadius,
  circle,
  direction,
  duration,
  enableAnimation = defaultEnableAnimation,
}) {
  
  const style = {};
  if (direction === "rtl") style["--animation-direction"] = "reverse";

  if (typeof duration === "number")
    style["--animation-duration"] = `${duration}s`;

  if (!enableAnimation) style["--pseudo-element-display"] = "none";

  if (typeof width === "string" || typeof width === "number")
    style.width = width;

  if (typeof height === "string" || typeof height === "number")
    style.height = height;

  if (typeof borderRadius === "string" || typeof borderRadius === "number")
    style.borderRadius = borderRadius;

  if (circle) style.borderRadius = "50%";

  if (typeof baseColor !== "undefined") style["--base-color"] = baseColor;

  if (typeof highlightColor !== "undefined")
    style["--highlight-color"] = highlightColor;

  return style;
}

export function Skeleton({
  count = 1,
  wrapper: Wrapper,
  className: customClassName,
  containerClassName,
  containerTestId,
  circle = false,
  style: styleProp,
  ...originalPropsStyleOptions
}) {
  const contextStyleOptions = React.useContext(SkeletonThemeContext);
  const propsStyleOptions = { ...originalPropsStyleOptions };

  for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
    if (typeof value === "undefined") {
      delete propsStyleOptions[key];
    }
  }

  const styleOptions = {
    ...contextStyleOptions,
    ...propsStyleOptions,
    circle,
  };

  const style = {
    ...styleProp,
    ...styleOptionsToCssProperties(styleOptions),
  };

  let className = styles.react_loading_skeleton;
  if (customClassName) className += ` ${customClassName}`;

  const inline = styleOptions.inline ?? false;
  const elements = [];
  const countCeil = Math.ceil(count);

  for (let i = 0; i < countCeil; i++) {
    let thisStyle = style;

    if (countCeil > count && i === countCeil - 1) {
      const width = thisStyle.width ?? "100%";
      const fractionalPart = count % 1;
      const fractionalWidth =
        typeof width === "number"
          ? width * fractionalPart
          : `calc(${width} * ${fractionalPart})`;
      thisStyle = { ...thisStyle, width: fractionalWidth };
    }

    const skeletonSpan = (
      <span className={className} style={thisStyle} key={i}>
        &zwnj;
      </span>
    );

    if (inline) {
      elements.push(skeletonSpan);
    } else {
      elements.push(
        <React.Fragment key={i}>
          {skeletonSpan}
          <br />
        </React.Fragment>
      );
    }
  }
  return (
    <span
      className={containerClassName}
      data-testid={containerTestId}
      aria-live="polite"
      aria-busy={styleOptions.enableAnimation ?? defaultEnableAnimation}
    >
      {Wrapper
        ? elements.map((el, i) => <Wrapper key={i}>{el}</Wrapper>)
        : elements}
    </span>
  );
}

Skeleton.propTypes = {
  circle: PropTypes.bool,
  className: PropTypes.any,
  containerClassName: PropTypes.any,
  containerTestId: PropTypes.any,
  count: PropTypes.number,
  style: PropTypes.any,
  wrapper: PropTypes.any,
};
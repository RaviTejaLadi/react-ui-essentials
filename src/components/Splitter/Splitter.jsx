import React, { useRef, useCallback, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Splitter.module.css";
import Box from "../Box/Box";

const Splitter = forwardRef(
  (
    { orientation = "vertical", width = "100%", height = "100%", margin = "0", children, className, style, ...rest },
    ref
  ) => {
    const containerRef = useRef();
    const resizerRef = useRef();
    const firstHalfRef = useRef();
    const secondHalfRef = useRef();

    const isHorizontal = orientation === "horizontal";

    const handleMouseDown = useCallback(
      (e) => {
        const startPos = isHorizontal ? e.clientX : e.clientY;
        const currentSize = isHorizontal
          ? firstHalfRef.current.getBoundingClientRect().width
          : firstHalfRef.current.getBoundingClientRect().height;

        const handleMouseMove = (e) => {
          const delta = isHorizontal ? e.clientX - startPos : e.clientY - startPos;
          updateSize(currentSize, delta);
          updateCursor();
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          resetCursor();
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      },
      [isHorizontal, firstHalfRef]
    );

    const handleTouchStart = useCallback(
      (e) => {
        const touch = e.touches[0];
        const startPos = isHorizontal ? touch.clientX : touch.clientY;
        const currentSize = isHorizontal
          ? firstHalfRef.current.getBoundingClientRect().width
          : firstHalfRef.current.getBoundingClientRect().height;

        const handleTouchMove = (e) => {
          const touch = e.touches[0];
          const delta = isHorizontal ? touch.clientX - startPos : touch.clientY - startPos;
          updateSize(currentSize, delta);
          updateCursor();
        };

        const handleTouchEnd = () => {
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchEnd);
          resetCursor();
        };

        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
      },
      [isHorizontal, firstHalfRef]
    );

    const updateSize = (currentSize, delta) => {
      const container = containerRef.current;
      const firstHalfEle = firstHalfRef.current;

      if (!container || !firstHalfEle) {
        return;
      }

      const containerSize = isHorizontal
        ? container.getBoundingClientRect().width
        : container.getBoundingClientRect().height;
      const newSize = currentSize + delta;
      const newPercentageSize = (newSize * 100) / containerSize;
      firstHalfEle.style.flexBasis = `${newPercentageSize}%`;
    };

    const updateCursor = () => {
      const resizerEle = resizerRef.current;

      if (!resizerEle) {
        return;
      }

      resizerEle.style.cursor = isHorizontal ? "ew-resize" : "ns-resize";
      document.body.style.cursor = isHorizontal ? "ew-resize" : "ns-resize";
    };

    const resetCursor = () => {
      const resizerEle = resizerRef.current;

      if (!resizerEle) {
        return;
      }

      resizerEle.style.removeProperty("cursor");
      document.body.style.removeProperty("cursor");
    };

    const firstHalfStyles = {
      padding: children[0].props.padding,
      flexBasis: children[0].props[isHorizontal ? "width" : "height"] || "50%",
      minWidth: children[0].props.minWidth,
      minHeight: children[0].props.minHeight,
    };

    const secondHalfStyles = {
      padding: children[1].props.padding,
      flexBasis: `calc(100 % - ${children[0].props[isHorizontal ? "width" : "height"] || "50%"})`,
      minWidth: children[1].props.minWidth,
      minHeight: children[1].props.minHeight,
    };

    return (
      <Box ref={ref} className={className} style={style}>
        <div
          className={`${styles.rue_splitter} ${
            isHorizontal ? styles.rue_splitter_horizontal : styles.rue_splitter_vertical
          }`}
          ref={containerRef}
          style={{ width, height, margin }}
          {...rest}
        >
          <div className={styles.rue_splitter_first} style={firstHalfStyles} ref={firstHalfRef}>
            {children[0]}
          </div>
          <div className={styles.rue_splitter_resizer_container}>
            <div
              className={styles.rue_splitter_resizer}
              ref={resizerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            />
          </div>
          <div className={styles.rue_splitter_second} style={secondHalfStyles} ref={secondHalfRef}>
            {children[1]}
          </div>
        </div>
      </Box>
    );
  }
);

Splitter.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};
Splitter.displayName = "Splitter";
export default Splitter;

const LeftContainer = ({ children, padding, width, height, minWidth, minHeight, className, style, ...rest }) => (
  <div className={className} style={{ padding, flexBasis: width || height, minWidth, minHeight, ...style }} {...rest}>
    {children}
  </div>
);

LeftContainer.propTypes = {
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const RightContainer = ({ children, padding, width, height, minWidth, minHeight, className, style, ...rest }) => (
  <div className={className} style={{ padding, flexBasis: width || height, minWidth, minHeight, ...style }} {...rest}>
    {children}
  </div>
);

RightContainer.propTypes = {
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Splitter.LeftContainer = LeftContainer;
Splitter.RightContainer = RightContainer;

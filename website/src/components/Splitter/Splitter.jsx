import PropTypes from "prop-types";
import * as React from "react";
import styles from "./Splitter.module.css";
import { LeftContainer, RightContainer, Divider } from "./components";

const Splitter = ({ children, width, height, margin, style, className, firstHalfRef, secondHalfRef, orientation }) => {
  const containerRef = React.useRef();
  const resizerRef = React.useRef();

  const handleMouseDown = React.useCallback(
    (e) => {
      const startPos = {
        x: e.clientX,
        y: e.clientY,
      };
      const currentLeftWidth = firstHalfRef.current.getBoundingClientRect().width;
      const currentTopHeight = firstHalfRef.current.getBoundingClientRect().height;

      const handleMouseMove = (e) => {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        if (orientation === "horizontal") {
          updateWidth(currentLeftWidth, dx);
        } else if (orientation === "vertical") {
          updateHeight(currentTopHeight, dy);
        }
        updateCursor();
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        resetCursor();
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      e.preventDefault();
    },
    [orientation]
  );

  const handleTouchStart = React.useCallback(
    (e) => {
      const touch = e.touches[0];
      const startPos = {
        x: touch.clientX,
        y: touch.clientY,
      };
      const currentLeftWidth = firstHalfRef.current.getBoundingClientRect().width;
      const currentTopHeight = firstHalfRef.current.getBoundingClientRect().height;

      const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const dx = touch.clientX - startPos.x;
        const dy = touch.clientY - startPos.y;
        if (orientation === "horizontal") {
          updateWidth(currentLeftWidth, dx);
        } else if (orientation === "vertical") {
          updateHeight(currentTopHeight, dy);
        }
        updateCursor();
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
        resetCursor();
      };

      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
      e.preventDefault();
    },
    [orientation]
  );

  const updateWidth = (currentLeftWidth, dx) => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;

    if (!container || !firstHalfEle) {
      return;
    }

    const containerWidth = container.getBoundingClientRect().width;
    const delta = currentLeftWidth + dx;
    const newFirstHalfWidth = (delta * 100) / containerWidth;
    firstHalfEle.style.width = `${newFirstHalfWidth}%`;
  };

  const updateHeight = (currentTopHeight, dy) => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;

    if (!container || !firstHalfEle) {
      return;
    }

    const containerHeight = container.getBoundingClientRect().height;
    const delta = currentTopHeight - dy;
    const newFirstHalfHeight = (delta * 100) / containerHeight;
    firstHalfEle.style.height = `${newFirstHalfHeight}%`;
  };

  const updateCursor = () => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
      return;
    }

    const cursor = orientation === "horizontal" ? "ew-resize" : "ns-resize";
    resizerEle.style.cursor = cursor;
    document.body.style.cursor = "ew-resize";
    firstHalfEle.style.userSelect = "none";
    firstHalfEle.style.pointerEvents = "none";
    secondHalfEle.style.userSelect = "none";
    secondHalfEle.style.pointerEvents = "none";
  };

  const resetCursor = () => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
      return;
    }

    resizerEle.style.removeProperty("cursor");
    document.body.style.removeProperty("cursor");
    firstHalfEle.style.removeProperty("user-select");
    firstHalfEle.style.removeProperty("pointer-events");
    secondHalfEle.style.removeProperty("user-select");
    secondHalfEle.style.removeProperty("pointer-events");
  };

  return (
    <div
      style={{ width: width, height: height, margin: margin, ...style }}
      className={`${styles.rue_splitter} ${
        orientation === "horizontal" ? styles.horizontal : styles.vertical
      } ${className}`}
      ref={containerRef}
    >
      {children[0]}
      <Splitter.Divider
        handleMouseDown={
          orientation === "horizontal" ? handleMouseDown : orientation === "vertical" ? handleMouseDown : null
        }
        handleTouchStart={
          orientation === "horizontal" ? handleTouchStart : orientation === "vertical" ? handleTouchStart : null
        }
        ref={resizerRef}
        className={`${styles.rue_splitter_resizer} ${
          orientation === "horizontal" ? styles.horizontal : styles.vertical
        }`}
      >
        <div
          className={`${styles.rue_splitter_resizer_center} ${
            orientation === "horizontal" ? styles.horizontal : styles.vertical
          }`}
        />
      </Splitter.Divider>
      {children[1]}
    </div>
  );
};

Splitter.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.any,
  width: PropTypes.any,
  firstHalfRef: PropTypes.any,
  secondHalfRef: PropTypes.any,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

Splitter.defaultProps = {
  orientation: "horizontal",
  width: "100%",
  height: "100%",
};

Splitter.LeftContainer = LeftContainer;
Splitter.RightContainer = RightContainer;
Splitter.Divider = Divider;

export default Splitter;

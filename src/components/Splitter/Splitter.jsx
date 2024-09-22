import React, { useState, useCallback, useRef, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import Box from "../Box/Box";
import useMergedRef from "../../hooks/useMergedRef";

const parseSizeToPixels = (size, containerSize) => {
  if (typeof size === "number") return size;
  if (typeof size === "string") {
    if (size.endsWith("%")) {
      return (parseFloat(size) / 100) * containerSize;
    }
    if (size.endsWith("px")) {
      return parseFloat(size);
    }
  }
  return null;
};

const useResizeHandle = (initialSizes, minSizes, maxSizes, orientation = "horizontal") => {
  const [sizes, setSizes] = useState(initialSizes);
  const containerRef = useRef(null);

  const handleResize = useCallback(
    (index, e) => {
      e.preventDefault();
      const startPos = orientation === "horizontal" ? e.clientY : e.clientX;
      const containerSize =
        orientation === "horizontal" ? containerRef.current.offsetHeight : containerRef.current.offsetWidth;
      const startSizes = [...sizes];

      const handleMouseMove = (moveEvent) => {
        const currentPos = orientation === "horizontal" ? moveEvent.clientY : moveEvent.clientX;
        const diff = currentPos - startPos;

        const newSizes = startSizes.map((size, i) => {
          if (i === index || i === index + 1) {
            const currentSize = parseSizeToPixels(size, containerSize);
            const minSize = parseSizeToPixels(minSizes[i], containerSize) || 0;
            const maxSize = parseSizeToPixels(maxSizes[i], containerSize) || containerSize;

            let newSize;
            if (i === index) {
              newSize = currentSize + diff;
            } else {
              newSize = currentSize - diff;
            }

            newSize = Math.max(minSize, Math.min(maxSize, newSize));
            return `${(newSize / containerSize) * 100}%`;
          }
          return size;
        });

        setSizes(newSizes);
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [sizes, minSizes, maxSizes, orientation]
  );

  return [sizes, handleResize, containerRef, setSizes];
};

const ResizeHandle = React.memo(({ onMouseDown, orientation = "horizontal", withHandle }) => {
  return (
    <div
      style={{
        [orientation === "horizontal" ? "height" : "width"]: "1px",
        [orientation === "horizontal" ? "width" : "height"]: "98%",
        background: "#e4e4e7",
        cursor: orientation === "horizontal" ? "ns-resize" : "ew-resize",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseDown={onMouseDown}
    >
      {withHandle &&
        (orientation === "horizontal" ? (
          <Box
            width="18px"
            height="14px"
            style={{ display: "flex", justifyContent: "center", alignItens: "center", paddingTop: "2px" }}
            backgroundColor="#e4e4e7"
            outlined
          >
            <svg viewBox="0 0 256 256" width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0" />
              <g strokeLinecap="round" strokeLinejoin="round" />
              <path
                fill="#212121"
                d="M76 92a16 16 0 1 1-16-16 16 16 0 0 1 16 16m52-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m68 32a16 16 0 1 0-16-16 16 16 0 0 0 16 16M60 148a16 16 0 1 0 16 16 16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16m68 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16"
              />
            </svg>
          </Box>
        ) : (
          <Box
            style={{ display: "flex", justifyContent: "center", alignItens: "center", paddingTop: "2px" }}
            width="12px"
            height="17px"
            backgroundColor="#e4e4e7"
            outlined
          >
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0" />
              <g strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M16 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
                fill="#212121"
              />
            </svg>
          </Box>
        ))}
    </div>
  );
});

const Splitter = forwardRef(({ orientation = "horizontal", height, children, withHandle = true }, ref) => {
  const panes = React.Children.toArray(children);
  const initialSizes = panes.map((pane) => pane.props.initialSize || `${100 / panes.length}%`);
  const minSizes = panes.map((pane) => pane.props.minSize || "0%");
  const maxSizes = panes.map((pane) => pane.props.maxSize || "100%");

  const [sizes, handleResize, containerRef, setSizes] = useResizeHandle(initialSizes, minSizes, maxSizes, orientation);
  const mergedRef = useMergedRef(ref, containerRef);
  
  useEffect(() => {
    const containerSize =
      orientation === "horizontal" ? containerRef.current.offsetHeight : containerRef.current.offsetWidth;
    const newSizes = initialSizes.map((size) => {
      const pxSize = parseSizeToPixels(size, containerSize);
      return `${(pxSize / containerSize) * 100}%`;
    });
    setSizes(newSizes);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: orientation === "horizontal" ? "column" : "row",
    height: height || "100%",
    width: "100%",
  };

  return (
    <div style={containerStyle} ref={mergedRef}>
      {panes.map((pane, index) => (
        <React.Fragment key={index}>
          <div
            style={{
              [orientation === "horizontal" ? "height" : "width"]: sizes[index],
              overflow: "auto",
            }}
          >
            {React.cloneElement(pane, {
              style: { height: "100%", width: "100%" },
              initialSize: pane.props.initialSize,
              minSize: pane.props.minSize,
              maxSize: pane.props.maxSize,
            })}
          </div>
          {index < panes.length - 1 && (
            <ResizeHandle
              withHandle={withHandle}
              onMouseDown={(e) => handleResize(index, e)}
              orientation={orientation}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
});

const SplitterPane = forwardRef(({ children, initialSize, minSize, maxSize, ...rest }, ref) => (
  <div ref={ref} style={{ height: "100%", overflow: "auto" }} {...rest}>
    {children}
  </div>
));

Splitter.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
  withHandle: PropTypes.bool,
};
SplitterPane.propTypes = {
  initialSize: PropTypes.string,
  minSize: PropTypes.string,
  maxSize: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Splitter.pane = SplitterPane;
SplitterPane.displayName = "SplitterPane";
Splitter.displayName = "Splitter";
ResizeHandle.displayName = "ResizeHandle";
export default Splitter;

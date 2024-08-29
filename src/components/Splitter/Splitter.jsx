import React, { useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";

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

const ResizeHandle = React.memo(({ onMouseDown, orientation = "horizontal" }) => (
  <div
    style={{
      [orientation === "horizontal" ? "height" : "width"]: "4px",
      [orientation === "horizontal" ? "width" : "height"]: "100%",
      background: "#ccc",
      cursor: orientation === "horizontal" ? "ns-resize" : "ew-resize",
    }}
    onMouseDown={onMouseDown}
  />
));

const Splitter = ({ orientation = "horizontal", height, children }) => {
  const panes = React.Children.toArray(children);
  const initialSizes = panes.map((pane) => pane.props.initialSize || `${100 / panes.length}%`);
  const minSizes = panes.map((pane) => pane.props.minSize || "0%");
  const maxSizes = panes.map((pane) => pane.props.maxSize || "100%");

  const [sizes, handleResize, containerRef, setSizes] = useResizeHandle(initialSizes, minSizes, maxSizes, orientation);

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
    <div style={containerStyle} ref={containerRef}>
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
            <ResizeHandle onMouseDown={(e) => handleResize(index, e)} orientation={orientation} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

Splitter.Pane = React.forwardRef(({ children, initialSize, minSize, maxSize, ...rest }, ref) => (
  <div ref={ref} style={{ height: "100%", overflow: "auto" }} {...rest}>
    {children}
  </div>
));

Splitter.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Splitter.Pane.propTypes = {
  initialSize: PropTypes.string,
  minSize: PropTypes.string,
  maxSize: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Splitter;

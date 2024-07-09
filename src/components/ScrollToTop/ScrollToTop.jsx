import PropTypes from "prop-types";
import React, { useState, useEffect, forwardRef, Fragment } from "react";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = forwardRef(
  (
    {
      top = 20,
      className = "",
      color = "black",
      smooth = false,
      component = "",
      viewBox = "0 0 256 256",
      svgPath = "M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z",
      width = "28",
      height = "28",
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        setVisible(document.documentElement.scrollTop >= top);
      };
      onScroll();
      document.addEventListener("scroll", onScroll);
      return () => document.removeEventListener("scroll", onScroll);
    }, [top]);

    const ToTop = (smooth) => {
      if (smooth) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        document.documentElement.scrollTop = 0;
      }
    };

    return (
      <Fragment>
        {visible && (
          <button
            ref={ref}
            className={`${styles.rue_scroll_to_top} ${className}`}
            onClick={() => ToTop(smooth)}
            aria-label="Scroll to top"
            {...props}
          >
            {component || (
              <svg width={width} height={height} fill={color} viewBox={viewBox}>
                <path d={svgPath} />
              </svg>
            )}
          </button>
        )}
      </Fragment>
    );
  }
);

ScrollToTop.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  component: PropTypes.string,
  height: PropTypes.string,
  smooth: PropTypes.bool,
  svgPath: PropTypes.string,
  top: PropTypes.number,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};
ScrollToTop.displayName = "ScrollToTop";
export default ScrollToTop;

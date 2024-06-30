import React, { useState, useLayoutEffect, forwardRef, memo } from "react";
import PropTypes from "prop-types";
import styles from "./Ripple.module.css";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);
      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }
    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = forwardRef(({ duration = 850, color = "#fff", ...rest }, ref) => {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = { x, y, size };
    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div ref={ref} className={styles.rue_ripple_container} onMouseDown={addRipple} {...rest}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => (
          <span
            key={"span" + index}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: color,
              animationDuration: `${duration}ms`,
            }}
            className={styles.rue_ripple_span}
          />
        ))}
    </div>
  );
});

Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
};
Ripple.displayName = "Ripple";
export default memo(Ripple);

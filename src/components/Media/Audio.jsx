import React, { memo, forwardRef } from "react";
import PropTypes from "prop-types";

const Audio = forwardRef(
  (
    { autoPlay = false, controls = true, loop = false, preload = "auto", className = "", children, src, ...rest },
    ref
  ) => {
    return (
      <audio
        ref={ref}
        className={className}
        src={src}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        preload={preload}
        {...rest}
      >
        {children}
      </audio>
    );
  }
);

Audio.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  preload: PropTypes.string,
  className: PropTypes.string,
};

export default memo(Audio);

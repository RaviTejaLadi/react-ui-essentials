import React from "react";
import PropTypes from "prop-types";

const Audio = ({ children, src, autoPlay, controls, loop, preload, className, ...rest }) => {
  return (
    <audio
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
};

Audio.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  preload: PropTypes.string,
  className: PropTypes.string,
};

Audio.defaultProps = {
  autoPlay: false,
  controls: true,
  loop: false,
  preload: "auto",
  className: "",
};

export default Audio;

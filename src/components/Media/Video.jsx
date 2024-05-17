import React from "react";
import PropTypes from "prop-types";

const Video = ({
  children,
  src,
  poster,
  autoPlay,
  controls,
  loop,
  muted,
  playsInline,
  preload,
  className,
  ...rest
}) => {
  return (
    <video
      src={src}
      className={className}
      poster={poster}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      {...rest}
    >
      {children}
    </video>
  );
};

Video.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  preload: PropTypes.string,
  className: PropTypes.string,
};

Video.defaultProps = {
  autoPlay: false,
  controls: true,
  loop: false,
  muted: false,
  playsInline: false,
  preload: "auto",
  className: "",
};

export default Video;

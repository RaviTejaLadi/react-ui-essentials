import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Video = forwardRef(
  (
    {
      autoPlay = false,
      controls = true,
      loop = false,
      muted = false,
      playsInline = false,
      preload = "auto",
      className = "",
      children,
      src,
      poster,
      ...rest
    },
    ref
  ) => {
    return (
      <video
        ref={ref}
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
  }
);

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
Video.displayName = "Video";
export default Video;

import * as React from "react";

const VideoFile = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.17 2H6.01a2 2 0 0 0-2 2L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM13 8V3.5L18.5 9H14c-.55 0-1-.45-1-1zm1 6 1.27-.67c.33-.18.73.06.73.44v2.46c0 .38-.4.62-.73.44L14 16v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1z" />
    </svg>
  );
};

VideoFile.displayName = "VideoFile";

export default VideoFile;

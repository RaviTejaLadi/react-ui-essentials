import * as React from "react";

const PlaylistAddCheck = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm19.21-3.79.09.09c.39.39.39 1.02 0 1.41l-5.58 5.59a.996.996 0 0 1-1.41 0l-3.09-3.09a.996.996 0 0 1 0-1.41l.09-.09a.996.996 0 0 1 1.41 0l2.3 2.3 4.78-4.79c.38-.4 1.02-.4 1.41-.01z" />
    </svg>
  );
};

PlaylistAddCheck.displayName = "PlaylistAddCheck";

export default PlaylistAddCheck;

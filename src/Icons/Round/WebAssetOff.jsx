import * as React from "react";

const WebAssetOff = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M6.83 4H20a2 2 0 0 1 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17l-4-4zm12.95 18.61L17.17 20H4a2 2 0 0 1-2-2V6c0-.34.08-.66.23-.94l-.84-.84A.996.996 0 1 1 2.8 2.81l18.38 18.38c.39.39.39 1.02 0 1.41-.38.4-1.01.4-1.4.01zM15.17 18l-10-10H4v10h11.17z" />
    </svg>
  );
};

WebAssetOff.displayName = "WebAssetOff";

export default WebAssetOff;

import * as React from "react";

const SettingsBluetooth = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <circle cx={12} cy={23} r={1} />
      <circle cx={8} cy={23} r={1} />
      <circle cx={16} cy={23} r={1} />
      <path d="M13.41 10 17 6.42c.39-.39.39-1.02 0-1.42L12.21.21a.705.705 0 0 0-.5-.21c-.39 0-.71.32-.71.71v6.88L7.11 3.71A.996.996 0 1 0 5.7 5.12L10.59 10 5.7 14.89a.996.996 0 1 0 1.41 1.41L11 12.41v6.88c0 .39.32.71.71.71.19 0 .37-.07.5-.21L17 15c.39-.39.39-1.02 0-1.42L13.41 10zM13 3.83l1.88 1.88L13 7.59V3.83zm0 12.34v-3.76l1.88 1.88L13 16.17z" />
    </svg>
  );
};

SettingsBluetooth.displayName = "SettingsBluetooth";

export default SettingsBluetooth;

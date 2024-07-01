import PropTypes from "prop-types";
import React, { memo, forwardRef } from "react";

const UnorderedList = forwardRef(({ children, listStyleType = "disc", ...rest }, ref) => {
  return (
    <ul ref={ref} style={{ listStyleType: listStyleType }} {...rest}>
      {children}
    </ul>
  );
});

UnorderedList.propTypes = {
  children: PropTypes.node.isRequired,
  listStyleType: PropTypes.string,
};

const ListItem = ({ children, ...rest }) => {
  return <li {...rest}>{children}</li>;
};

ListItem.propTypes = {
  children: PropTypes.any,
};

UnorderedList.Item = ListItem;
UnorderedList.displayName = "UnorderedList";
export default memo(UnorderedList);

import PropTypes from "prop-types";
import React from "react";

const UnorderedList = ({ children, listStyleType, ...rest }) => {
  return (
    <ul style={{ listStyleType: listStyleType }} {...rest}>
      {children}
    </ul>
  );
};

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

UnorderedList.defaultProps = {
  listStyleType: "disc",
};

UnorderedList.Item = ListItem;
export default UnorderedList;

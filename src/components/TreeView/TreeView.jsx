import PropTypes from "prop-types";
import React, { useState, useEffect, memo } from "react";
import Button from "../Button/Button";

const TreeNode = ({ node, parentChecked, showCheckBox, onCheckChange }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [checked, setChecked] = useState(parentChecked !== undefined ? parentChecked : false);

  useEffect(() => {
    if (parentChecked !== undefined) {
      setChecked(parentChecked);
    }
  }, [parentChecked]);

  useEffect(() => {
    onCheckChange(node, checked);
  }, [checked]);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div style={{ fontSize: "12px" }}>
      {showCheckBox && (
        <input
          type="checkbox"
          id={node.name}
          name={node.name}
          checked={checked}
          onChange={handleCheck}
          disabled={parentChecked === false}
        />
      )}
      <label htmlFor={node.name} style={{ marginLeft: "10px" }}>
        {node.children && (
          <Button size="sm" variant="light" onClick={handleToggle}>
            {collapsed ? "🔺" : "🔻"}
          </Button>
        )}
        {node.name}
      </label>
      {!collapsed && node.children && (
        <div style={{ marginLeft: "5px", paddingBottom: "3px", fontSize: "12px" }}>
          {node.children.map((child, index) => (
            <div key={index} style={{ marginLeft: "25px" }}>
              <TreeNode node={child} parentChecked={checked} onCheckChange={onCheckChange} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

TreeNode.propTypes = {
  node: PropTypes.shape({
    children: PropTypes.shape({
      map: PropTypes.func,
    }),
    name: PropTypes.any,
  }),
  onCheckChange: PropTypes.func,
  parentChecked: PropTypes.bool,
  showCheckBox: PropTypes.bool,
};

const TreeView = ({ data, showCheckBox }) => {
  const [checkedNodes, setCheckedNodes] = useState(JSON.parse(JSON.stringify(data)));

  const handleCheckChange = (node, isChecked) => {
    const updateCheckedStatus = (nodeToUpdate) => {
      if (nodeToUpdate.name === node.name) {
        nodeToUpdate.checked = isChecked;
      }
      if (nodeToUpdate.children) {
        nodeToUpdate.children.forEach(updateCheckedStatus);
      }
    };
    updateCheckedStatus(checkedNodes);
    setCheckedNodes({ ...checkedNodes });
  };

  const filterCheckedNodes = (node) => {
    if (node.checked) {
      return {
        ...node,
        children: node.children ? node.children.map(filterCheckedNodes).filter((n) => n !== null) : null,
      };
    }
    return null;
  };

  const checkedHierarchy = filterCheckedNodes(checkedNodes);

  return (
    <div>
      <TreeNode node={data} showCheckBox={showCheckBox} onCheckChange={handleCheckChange} parentChecked={undefined} />
      {showCheckBox && (
        <pre>
          <code>{JSON.stringify(checkedHierarchy, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};

TreeView.propTypes = {
  data: PropTypes.array.isRequired,
  showCheckBox: PropTypes.bool,
};

export default memo(TreeView);

import React from "react";
import { Delete, LeftArrow, RightArrow } from "../icons";
import styles from "../EditableTable.module.css";
import Box from "../../Box/Box";
import Button from "../../Button/Button";

const ColumnControlsMenu = ({ deleteColumn, addColumnRightSide, addColumnLeftSide }) => {
  return (
    <Box outlined width="130px" padding="5px" className={styles.rue_editable_table_controls}>
      <Button size="sm" variant="light" endIcon={<Delete width="15px" height="15px" />} onClick={deleteColumn}>
        <Button.Text>Delete</Button.Text>
      </Button>
      <Button
        size="sm"
        variant="light"
        endIcon={<RightArrow width="15px" height="15px" />}
        onClick={addColumnRightSide}
      >
        <Button.Text>insert Right</Button.Text>
      </Button>
      <Button size="sm" variant="light" endIcon={<LeftArrow width="15px" height="15px" />} onClick={addColumnLeftSide}>
        <Button.Text>insert Left</Button.Text>
      </Button>
    </Box>
  );
};
export default ColumnControlsMenu;

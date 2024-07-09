import React from "react";
import { Delete, DownArrow, UpArrow } from "../icons";
import styles from "../EditableTable.module.css";
import Box from "../../Box/Box";
import Button from "../../Button/Button";

const RowControlsMenu = ({ deleteRow, addRowBelow, addRowAbove }) => {
  return (
    <Box outlined width="130px" padding="3px" className={styles.rue_editable_table_controls}>
      <Button size="sm" variant="light" endIcon={<Delete width="15px" height="15px" />} onClick={deleteRow}>
        <Button.Text>Delete</Button.Text>
      </Button>
      <Button size="sm" variant="light" endIcon={<DownArrow width="15px" height="15px" />} onClick={addRowBelow}>
        <Button.Text>insert Below</Button.Text>
      </Button>
      <Button size="sm" variant="light" endIcon={<UpArrow width="15px" height="15px" />} onClick={addRowAbove}>
        <Button.Text>insert Above</Button.Text>
      </Button>
    </Box>
  );
};
export default RowControlsMenu;

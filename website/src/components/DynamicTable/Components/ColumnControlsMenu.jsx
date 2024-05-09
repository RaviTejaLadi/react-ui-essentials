import React from "react";
import { Box, Button } from "react-ui-essentials";
import { Delete, LeftArrow, RightArrow } from "../icons";
import styles from "../DynamicTable.module.css";

const ColumnControlsMenu = ({ deleteColumn, addColumnRightSide, addColumnLeftSide }) => {
  return (
    <Box outlined width="130px" padding="5px" className={styles.rue_dynamic_table_controls}>
      <Button size="sm" variant="light" endIcon={<Delete width="15px" height="15px" />} onClick={deleteColumn}>
        Delete
      </Button>
      <Button
        size="sm"
        variant="light"
        endIcon={<RightArrow width="15px" height="15px" />}
        onClick={addColumnRightSide}
      >
        insert Right
      </Button>
      <Button size="sm" variant="light" endIcon={<LeftArrow width="15px" height="15px" />} onClick={addColumnLeftSide}>
        insert Left
      </Button>
    </Box>
  );
};
export default ColumnControlsMenu;

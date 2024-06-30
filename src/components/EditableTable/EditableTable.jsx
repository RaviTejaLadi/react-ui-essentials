import PropTypes from "prop-types";
import React, { useState, useEffect, useRef, forwardRef, memo } from "react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import styles from "./EditableTable.module.css";
import { Ellipsis } from "./icons";
import { ColumnControlsMenu, RowControlsMenu } from "./Components";

const EditableTable = forwardRef(({ headers, rows }, ref) => {
  const [initialRowData, setInitialRowData] = useState([]);
  const [initialTableHeaders, setInitialTableHeaders] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [hoverRowIndex, setHoverRowIndex] = useState(null);
  const [hoverColumnIndex, setHoverColumnIndex] = useState(null);
  const [showColumnControls, setShowColumnControls] = useState(null);
  const [showRowControls, setShowRowControls] = useState(false);

  const inputRefs = useRef([]);
  const headerInputRefs = useRef([]);

  useEffect(() => {
    setRowData(rows);
    setTableHeaders(headers);
    setInitialRowData(rows);
    setInitialTableHeaders(headers);
  }, [rows, headers]);

  const addRow = (index) => {
    const newRow = tableHeaders.map(() => "");
    const updatedRows = [...rowData];
    updatedRows.splice(index, 0, newRow);
    setRowData(updatedRows);
  };

  const addColumn = (index) => {
    const newColumnName = `Column ${tableHeaders.length + 1}`;
    const updatedHeaders = [...tableHeaders];
    updatedHeaders.splice(index, 0, newColumnName);
    const newRows = rowData.map((row) => {
      const newRow = [...row];
      newRow.splice(index, 0, "");
      return newRow;
    });
    setTableHeaders(updatedHeaders);
    setRowData(newRows);
  };

  const deleteRow = (rowIndex) => {
    const updatedRows = rowData.filter((row, index) => index !== rowIndex);
    setRowData(updatedRows);
  };

  const deleteColumn = (columnIndex) => {
    const updatedHeaders = tableHeaders.filter((header, index) => index !== columnIndex);
    const updatedRows = rowData.map((row) => row.filter((_, index) => index !== columnIndex));
    setTableHeaders(updatedHeaders);
    setRowData(updatedRows);
  };

  const handleHeaderChange = (index, newValue) => {
    const updatedHeaders = [...tableHeaders];
    updatedHeaders[index] = newValue;
    setTableHeaders(updatedHeaders);
    setTimeout(() => {
      headerInputRefs.current[index].focus();
    }, 0);
  };

  const handleCellChange = (rowIndex, columnIndex, newValue) => {
    const updatedRows = [...rowData];
    updatedRows[rowIndex][columnIndex] = newValue;
    setRowData(updatedRows);
    setTimeout(() => {
      inputRefs.current[rowIndex][columnIndex].focus();
    }, 0);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
    setInitialRowData(rowData);
    setInitialTableHeaders(tableHeaders);
  };

  const cancelChanges = () => {
    setIsEditing(false);
    setRowData(initialRowData);
    setTableHeaders(initialTableHeaders);
  };

  const handleSubmit = () => {
    setSubmittedData({ headers: tableHeaders, rows: rowData });
  };

  return (
    <Box ref={ref} elevation={1} rounded margin="10px">
      {!isEditing && (
        <Box
          elevation={0}
          margin="2px"
          padding="3px"
          rounded
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button size="sm" variant="light" onClick={toggleEditMode}>
            Edit
          </Button>
          <Button size="sm" variant="light" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      )}
      <div>
        {isEditing && (
          <Box
            elevation={0}
            margin="2px"
            padding="3px"
            rounded
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button size="sm" variant="light" onClick={saveChanges}>
              Save
            </Button>
            <Button size="sm" variant="light" onClick={cancelChanges}>
              Cancel
            </Button>
          </Box>
        )}
      </div>
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Headers: {JSON.stringify(submittedData.headers)}</p>
          <p>Rows: {JSON.stringify(submittedData.rows)}</p>
        </div>
      )}
      <Box
        elevation={0}
        width="calc(100% - 5px)"
        height="100%"
        margin=" 5px 2px"
        padding="2px"
        rounded
        style={{ overflow: "auto" }}
      >
        <table className={styles.rue_editable_table}>
          <thead className={styles.rue_editable_table_thead}>
            <tr className={styles.rue_editable_table_tr}>
              {tableHeaders.map((header, index) => (
                <th className={styles.rue_editable_table_th} key={`${header}-${index}`}>
                  <Box width="100%" className={styles.rue_editable_table_header_edit_options}>
                    {isEditing ? (
                      <input
                        className={styles.rue_editable_table_input}
                        type="text"
                        value={header}
                        onChange={(e) => handleHeaderChange(index, e.target.value)}
                        ref={(el) => {
                          headerInputRefs.current[index] = el;
                        }}
                      />
                    ) : (
                      header
                    )}
                    {isEditing && (
                      <Box className={styles.rue_editable_table_column_controls_btn}>
                        <Button
                          size="sm"
                          variant="light"
                          onClick={() => setShowColumnControls(showColumnControls === index ? null : index)}
                        >
                          <Ellipsis width="15px" height="15px" />
                        </Button>
                        {showColumnControls === index && (
                          <ColumnControlsMenu
                            deleteColumn={() => deleteColumn(index)}
                            addColumnRightSide={() => addColumn(index + 1)}
                            addColumnLeftSide={() => addColumn(index)}
                          />
                        )}
                      </Box>
                    )}
                  </Box>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.rue_editable_table_tbody}>
            {rowData.map((row, rowIndex) => (
              <tr
                className={styles.rue_editable_table_tr}
                key={`${row}-${rowIndex}`}
                // style={{ background:rowColor&& rowColor[rowIndex] || "white" }}
                onMouseEnter={() => setHoverRowIndex(rowIndex)}
                onMouseLeave={() => setHoverRowIndex(null)}
              >
                {row.map((data, columnIndex) => (
                  <td className={styles.rue_editable_table_td} key={`${data}-${columnIndex}`}>
                    {isEditing ? (
                      <input
                        className={styles.rue_editable_table_input}
                        type="text"
                        value={data}
                        onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                        ref={(el) => {
                          if (el) {
                            if (!inputRefs.current[rowIndex]) {
                              inputRefs.current[rowIndex] = [];
                            }
                            inputRefs.current[rowIndex][columnIndex] = el;
                          }
                        }}
                      />
                    ) : (
                      data
                    )}
                  </td>
                ))}
                {isEditing && (
                  <td className={styles.rue_editable_table_td}>
                    <Box className={styles.rue_editable_table_row_controls_btn}>
                      <Button
                        size="sm"
                        variant="light"
                        onClick={() => setShowRowControls(showRowControls === rowIndex ? null : rowIndex)}
                      >
                        <Ellipsis width="15px" height="15px" />
                      </Button>
                      {showRowControls === rowIndex && (
                        <RowControlsMenu
                          deleteRow={() => deleteRow(rowIndex)}
                          addRowBelow={() => addRow(rowIndex + 1)}
                          addRowAbove={() => addRow(rowIndex)}
                        />
                      )}
                    </Box>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
});

EditableTable.propTypes = {
  headers: PropTypes.array,
  // rowColor: PropTypes.array,
  rows: PropTypes.array,
};

export default memo(EditableTable);

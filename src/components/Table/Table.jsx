import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.css";
import Code from "../Code/Code";

const Table = forwardRef(
  (
    { columns, rows, code = false, CodeColumn = [], codeColor = "", codeUnderline = false, codeStyle = {}, ...rest },
    ref
  ) => {
    const codeColumns = Array.isArray(CodeColumn) ? CodeColumn : [CodeColumn];

    return (
      <div ref={ref} className={styles.rue_table_container} {...rest}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} data-th={columns[cellIndex]}>
                    {code && codeColumns.includes(cellIndex) ? (
                      <Code color={codeColor} underline={codeUnderline} style={codeStyle}>
                        {cell}
                      </Code>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  code: PropTypes.bool,
  CodeColumn: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  codeColor: PropTypes.string,
  codeUnderline: PropTypes.bool,
  codeStyle: PropTypes.object,
};
Table.displayName = "Table";
export default Table;

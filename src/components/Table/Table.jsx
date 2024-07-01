import React, { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.css";
import Code from "../Code/Code";

const Table = forwardRef(
  (
    {
      columns,
      rows,
      basic = false,
      code = false,
      CodeColumn = 0,
      codeColor = "",
      codeUnderline = false,
      codeStyle = {},
      ...rest
    },
    ref
  ) => {
    return (
      <div ref={ref} className={styles.rue_table_container} {...rest}>
        <table
          className={basic ? `${styles.rue_basic_table} ${styles.rue_basic_table_striped}` : `${styles.rue_table}`}
        >
          <tbody>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} data-th={columns[cellIndex]}>
                    {code && cellIndex === CodeColumn ? (
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
  basic: PropTypes.bool,
  code: PropTypes.bool,
  CodeColumn: PropTypes.number,
  codeColor: PropTypes.string,
  codeUnderline: PropTypes.bool,
  codeStyle: PropTypes.object,
};
Table.displayName = "Table";
export default memo(Table);

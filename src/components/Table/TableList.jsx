import React, { forwardRef } from "react";
import Table from "./Table";
import PropTypes from "prop-types";
import Code from "../Code/Code";

const TableList = forwardRef(
  (
    {
      columns,
      rows,
      code = false,
      CodeColumn = [],
      codeColor = "",
      codeUnderline = false,
      codeStyle = {},
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const codeColumns = Array.isArray(CodeColumn) ? CodeColumn : [CodeColumn];

    return (
      <Table ref={ref} className={className} style={style} {...rest}>
        <Table.Head>
          <Table.Row>
            {columns.map((column, index) => (
              <Table.Cell isHeader key={index}>
                {column}
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row, rowIndex) => (
            <Table.Row key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Table.Cell key={cellIndex} data-th={columns[cellIndex]}>
                  {code && codeColumns.includes(cellIndex) ? (
                    <Code color={codeColor} underline={codeUnderline} style={codeStyle}>
                      {cell}
                    </Code>
                  ) : (
                    cell
                  )}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
);

TableList.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  code: PropTypes.bool,
  CodeColumn: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  codeColor: PropTypes.string,
  codeUnderline: PropTypes.bool,
  codeStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

TableList.displayName = "TableList";
export default TableList;

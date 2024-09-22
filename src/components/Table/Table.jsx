import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Table.module.css";

const Table = forwardRef(({ children, className, style, ...rest }, ref) => {
  return (
    <table ref={ref} className={`${styles.table} ${className || ""}`} style={style} {...rest}>
      {children}
    </table>
  );
});

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const TableHead = ({ children, className, style, ...rest }) => {
  return (
    <thead className={`${styles.tableHead} ${className || ""}`} style={style} {...rest}>
      {children}
    </thead>
  );
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const TableBody = ({ children, className, style, ...rest }) => {
  return (
    <tbody className={`${styles.tableBody} ${className || ""}`} style={style} {...rest}>
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const TableFooter = ({ children, className, style, ...rest }) => {
  return (
    <tfoot className={`${styles.tableFooter} ${className || ""}`} style={style} {...rest}>
      {children}
    </tfoot>
  );
};

TableFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const TableRow = ({ children, className, style, ...rest }) => {
  return (
    <tr className={`${styles.tableRow} ${className || ""}`} style={style} {...rest}>
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const TableCell = ({ children, className, style, isHeader = false, ...rest }) => {
  const CellTag = isHeader ? "th" : "td";
  return (
    <CellTag className={`${styles.tableCell} ${className || ""}`} style={style} {...rest}>
      {children}
    </CellTag>
  );
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  isHeader: PropTypes.bool,
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.displayName = "Table";

export default Table;

import PropTypes from "prop-types";
import React from "react";
import "./Table.css";

const Table = ({ children }) => {
  return <div className="rue_table_container">{children}</div>;
};

Table.propTypes = {
  children: PropTypes.node,
};

const TableHeader = ({ children }) => {
  return <div className="rue_table_header_row">{children}</div>;
};

TableHeader.propTypes = {
  children: PropTypes.node,
};

const TableCell = ({ children }) => {
  return <div className="rue_table_column">{children}</div>;
};

TableCell.propTypes = {
  children: PropTypes.node,
};

const TableRow = ({ children }) => {
  return <div className="rue_table_body_row">{children}</div>;
};

TableRow.propTypes = {
  children: PropTypes.node,
};
const TableBody = ({ children }) => {
  return <div className="rue_table_body">{children}</div>;
};

TableBody.propTypes = {
  children: PropTypes.node,
};

Table.Header = TableHeader;
Table.Cell = TableCell;
Table.Row = TableRow;
Table.Body = TableBody;

export default Table;

import PropTypes from "prop-types";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import styles from "./Content.module.css";
import { Divider, Box } from "react-ui-essentials";

const Content = ({ children, className, style, ...rest }) => {
  return (
    <Box className={`${styles.rue_content} ${className}`} style={style} {...rest}>
      {children}
    </Box>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const ContentHeader = ({ children, className, style }) => {
  return (
    <div className={`${styles.rue_content_header} ${className}`} style={style}>
      {children}
    </div>
  );
};

ContentHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const ContentBody = ({
  children,
  cards,
  searchStates,
  PaginationStates,
  hideSearchBar,
  hidePagination,
  className,
  style,
}) => {
  return (
    <div className={`${styles.rue_content_body} ${className}`} style={style}>
      {!hideSearchBar && (
        <div className={styles.rue_content_search_bar}>
          <SearchBar setDebouncedSearchTerm={searchStates.setDebouncedSearchTerm} />
        </div>
      )}
      <Divider />
      <div className={styles.rue_content_cards_container}>{cards}</div>
      <div className={styles.rue_content_body_children}>{children}</div>
      <Divider />
      {!hidePagination && (
        <div className={styles.rue_content_pagination}>
          <Pagination
            size="sm"
            currentPage={PaginationStates.currentPage}
            setCurrentPage={PaginationStates.setCurrentPage}
            maxPageNumbersToShow={5}
            totalPages={PaginationStates.totalPages}
          />
        </div>
      )}
    </div>
  );
};

ContentBody.propTypes = {
  PaginationStates: PropTypes.shape({
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    totalPages: PropTypes.number,
  }),
  cards: PropTypes.array,
  children: PropTypes.node,
  className: PropTypes.string,
  hidePagination: PropTypes.bool,
  hideSearchBar: PropTypes.bool,
  searchStates: PropTypes.shape({
    setDebouncedSearchTerm: PropTypes.func,
  }),
  style: PropTypes.string,
};

ContentBody.defaultProps = {
  hidePagination: false,
  hideSearchBar: false,
};

const ContentFooter = ({ children, className, style }) => {
  return (
    <div className={`${styles.rue_content_footer} ${className}`} style={style}>
      {children}
    </div>
  );
};

ContentFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

Content.Header = ContentHeader;
Content.Body = ContentBody;
Content.Footer = ContentFooter;
export default Content;

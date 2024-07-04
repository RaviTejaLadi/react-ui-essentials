import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Content.module.css";
import Divider from "../Divider/Divider";
import Box from "../Box/Box";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";

const Content = forwardRef(({ children, className, style, ...rest }, ref) => {
  return (
    <Box ref={ref} className={`${styles.rue_content} ${className}`} style={style} {...rest}>
      {children}
    </Box>
  );
});

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
  hidePagination = false,
  hideSearchBar = false,
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
Content.displayName = "Content";
export default Content;

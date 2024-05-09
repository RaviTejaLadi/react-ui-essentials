import PropTypes from "prop-types";
import React from "react";
import styles from "./Pagination.module.css";
import { Button } from "react-ui-essentials";

const Pagination = ({ totalPages, currentPage, setCurrentPage, maxPageNumbersToShow = 5, size }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const middlePageNumber = Math.floor(maxPageNumbersToShow / 2);
    let startPageNumber = currentPage - middlePageNumber;
    let endPageNumber = currentPage + middlePageNumber;

    if (startPageNumber <= 0) {
      startPageNumber = 1;
      endPageNumber = maxPageNumbersToShow;
    }

    if (endPageNumber > totalPages) {
      endPageNumber = totalPages;
      startPageNumber = totalPages - maxPageNumbersToShow + 1;
      if (startPageNumber <= 0) {
        startPageNumber = 1;
      }
    }

    for (let i = startPageNumber; i <= endPageNumber; i++) {
      pageNumbers.push(
        <Button variant={i === currentPage ? "info" : "dark"} size={size} key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </Button>
      );
    }
    return pageNumbers;
  };
  return (
    <div className={styles.pagination}>
      <Button variant="dark" size={size} onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        First
      </Button>
      <Button variant="dark" size={size} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
      {renderPageNumbers()}
      <Button
        variant="dark"
        size={size}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
      <Button
        variant="dark"
        size={size}
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  maxPageNumbersToShow: PropTypes.number,
  setCurrentPage: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  totalPages: PropTypes.number,
};

export default Pagination;

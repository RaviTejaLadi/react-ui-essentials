import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Pagination.module.css";
import Button from "../Button/Button";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "../../Icons/Round";

const Pagination = forwardRef(
  ({ totalPages, currentPage, setCurrentPage, maxPageNumbersToShow = 5, size, ...rest }, ref) => {
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
          <Button
            variant={i === currentPage ? "primary" : "light"}
            size={size}
            key={i}
            onClick={() => setCurrentPage(i)}
          >
            <Button.Text>{i}</Button.Text>
          </Button>
        );
      }
      return pageNumbers;
    };
    return (
      <div ref={ref} className={styles.pagination} {...rest}>
        <Button variant="light" size={size} onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          <Button.Icon>
            <KeyboardDoubleArrowLeft width="20px" height="20px" />
          </Button.Icon>
        </Button>
        <Button
          variant="light"
          size={size}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Button.Icon>
            <KeyboardArrowLeft width="20px" height="20px" />
          </Button.Icon>
        </Button>
        {renderPageNumbers()}
        <Button
          variant="light"
          size={size}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Button.Icon>
            <KeyboardArrowRight width="20px" height="20px" />
          </Button.Icon>
        </Button>
        <Button
          variant="light"
          size={size}
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <Button.Icon>
            <KeyboardDoubleArrowRight width="20px" height="20px" />
          </Button.Icon>
        </Button>
      </div>
    );
  }
);

Pagination.propTypes = {
  currentPage: PropTypes.number,
  maxPageNumbersToShow: PropTypes.number,
  setCurrentPage: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  totalPages: PropTypes.number,
};
Pagination.displayName = "Pagination";
export default Pagination;

import PropTypes from "prop-types";
import React, { useEffect, useState, memo, forwardRef } from "react";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./SearchBar.module.css";
import { Search } from "../../Icons/Round";

const SearchBar = forwardRef(({ setDebouncedSearchTerm, width, height, ...rest }, ref) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const handleClearBtn = () => {
    setSearchTerm("");
  };

  return (
    <div ref={ref} className={styles.rue_searchbar} style={{ width: width, height: height }} {...rest}>
      <Search width="20px" height="20px" className={styles.rue_searchbar_search_icon} />
      <input
        className={styles.rue_searchbar_input}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        name="search"
        id="search"
        aria-label="Search"
      />
      {searchTerm && <CloseButton size="sm" variant="light" onClick={handleClearBtn} />}
    </div>
  );
});

SearchBar.propTypes = {
  height: PropTypes.string,
  setDebouncedSearchTerm: PropTypes.func,
  width: PropTypes.string,
};

SearchBar.displayName = "SearchBar";
export default SearchBar;

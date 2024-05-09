import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { CloseButton } from "react-ui-essentials";
import styles from "./SearchBar.module.css";

const Search = (props) => (
  <svg viewBox="0 -0.5 25 25" fill="#ccc" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <g stroke="#000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path clipRule="evenodd" d="M5.5 10.766a5.765 5.765 0 1 1 11.53 0 5.765 5.765 0 0 1-11.53 0" />
      <path d="M17.029 16.53 19.5 19" />
    </g>
  </svg>
);

const SearchBar = ({ setDebouncedSearchTerm, width, height }) => {
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
    <div className={styles.rue_searchbar}>
      <Search width="17px" height="17px" className={styles.rue_searchbar_search_icon} />
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
};

SearchBar.propTypes = {
  height: PropTypes.string,
  setDebouncedSearchTerm: PropTypes.func,
  width: PropTypes.string,
};

export default SearchBar;

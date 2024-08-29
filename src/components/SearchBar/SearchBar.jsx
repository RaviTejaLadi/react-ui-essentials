import PropTypes from "prop-types";
import React from "react";
import styles from "./SearchBar.module.css";
import { Search } from "../../Icons/Round";

const SearchBar = ({ placeholder, value, onChange, size = "md", className, style, ...rest }) => {
  return (
    <div className={`${styles.rue_searchBar} ${styles[`rue_${size}`]} ${className}`} style={style}>
      <Search className={styles.rue_icon} />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.rue_input}
        {...rest}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
};

export default SearchBar;

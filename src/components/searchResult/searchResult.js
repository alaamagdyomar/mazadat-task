import React from "react";
import styles from "./searchResult.module.css";

function SearchResultComponent() {
  return (
    <div className={styles.searchResult}>
      <p className={styles.searchResultText}>
        1-16 of over 200 results for <strong>Laptops</strong>
      </p>
    </div>
  );
}

export default SearchResultComponent;

import React, { useContext } from "react";
import { FiltersContext } from "../../contexts/FiltersContext";
import "./styles.css";

const Filters = () => {
  const {
    sortDirection,
    keywords,
    toggleSortDirection,
    changeKeywords,
    toggleComplete,
    complete,
  } = useContext(FiltersContext);

  return (
    <div className="filters_container">
      <div onClick={toggleSortDirection}>
        {sortDirection === "DESC" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-sort-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-sort-up"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
          </svg>
        )}
      </div>
      <input
        type="text"
        placeholder="Keywords"
        value={keywords}
        onChange={(e) => {
          changeKeywords(e.target.value);
        }}
      />
      <div className="compele_checkbox" onClick={toggleComplete}>
        <input
          type="checkbox"
          id="complete"
          checked={complete}
          onChange={() => {}}
        />
        <label htmlFor="complete">Complete</label>
      </div>
    </div>
  );
};

export default Filters;

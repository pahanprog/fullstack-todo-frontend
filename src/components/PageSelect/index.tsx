import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import "./styles.css";

const PageSelect = () => {
  const { currentPage, setCurrentPage, maxPage } = useContext(TodosContext);

  const handleBackClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleForwardClick = () => {
    if (currentPage + 1 < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="page_select_container">
      <div onClick={handleBackClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left-square"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
      </div>
      <div className="pages">
        {currentPage + 1}/{maxPage > 0 ? maxPage : 1}
      </div>
      <div onClick={handleForwardClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-square"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      </div>
    </div>
  );
};

export default PageSelect;

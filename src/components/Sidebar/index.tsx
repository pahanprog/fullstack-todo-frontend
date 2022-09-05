import React from "react";
import CreateTaskModal from "../CreateTaskModal.tsx";
import Filters from "../Filters";
import PageSelect from "../PageSelect";
import TodoList from "../TodoLits";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar_main_container">
      <Filters />
      <TodoList />
      <PageSelect />
      <CreateTaskModal />
    </div>
  );
};

export default Sidebar;

import React from "react";
import Header from "../../components/Header";
import SelectedTask from "../../components/SelectedTask";
import Sidebar from "../../components/Sidebar";
import "./styles.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className="main_container">
        <Sidebar />
        <SelectedTask />
      </div>
    </>
  );
};

export default Main;

import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header>
      <div className="logo">Todo</div>
      <div className="navigation">
        {!localStorage.getItem("token") ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/" onClick={handleLogOut}>
            Log out
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

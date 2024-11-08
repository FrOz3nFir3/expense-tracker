import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      {/* Probably have description and images here */}
      <h2>Welcome to the Expense Tracker</h2>
      <NavLink
        style={{ textDecoration: "none" }}
        className="btn ml-0"
        to="/dashboard"
      >
        View DashBoard{" "}
      </NavLink>
    </div>
  );
};

export default HomePage;

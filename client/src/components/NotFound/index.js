import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      Cannot Find the page Return to the <NavLink to="/">Home Page</NavLink>
    </div>
  );
};

export default NotFound;

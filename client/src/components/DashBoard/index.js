import React from "react";
import Budget from "./Budget";
import Expense from "./Expense";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slice/authSlice";

const DashBoard = () => {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    return (
      <div className="container">
        <h2 className="text-center">Please login to view this page</h2>
      </div>
    );
  }

  return (
    <div className="pb-10 container flow-content">
      <Budget />

      <Expense />
    </div>
  );
};

export default DashBoard;

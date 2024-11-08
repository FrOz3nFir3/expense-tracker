import React from "react";
import NewExpense from "./NewExpense";
import ExpenseList from "./ExpenseList";
import { useSelector } from "react-redux";
import { selectUserExpenses } from "../../../slice/authSlice";

const Expense = () => {
  const expenses = useSelector(selectUserExpenses);

  return (
    <div className="flow-content">
      <NewExpense />

      <h2>Expenses</h2>

      <ExpenseList items={expenses} />
    </div>
  );
};

export default Expense;

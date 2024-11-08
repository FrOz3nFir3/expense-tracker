import React from "react";
import { getMinDate, getTodayDate } from "../../../utils/date";
import SelectExpenseWrapper from "./SelectWrapper.js";
import { usePatchUpdateUserMutation } from "../../../slice/apiSlice";
import { useButtonToggle } from "../../../hooks/useButtonToggle";
import { updateUser } from "../../../slice/authSlice";
import { useDispatch } from "react-redux";

const NewExpense = () => {
  const [showForm, toggleShowForm] = useButtonToggle(false);
  const [patchUpdateUser, { isSuccess, isLoading, error }] =
    usePatchUpdateUserMutation();
  const formRef = React.useRef(null);
  const expenseData = React.useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const expenseName = formData.get("expense-name");
    const expenseAmount = formData.get("expense-amount");
    const expenseDate = formData.get("expense-date");
    const expenseCategory = formData.get("expense-category");

    expenseData.current = {
      requestType: "expenses/add",
      expense: {
        expenseId: crypto.randomUUID(),
        name: expenseName,
        amount: Number(expenseAmount),
        date: expenseDate,
        category: expenseCategory,
      },
    };

    patchUpdateUser(expenseData.current);
  };

  React.useEffect(() => {
    if (!isSuccess || expenseData.current === null) return;

    dispatch(updateUser(expenseData.current));
    formRef.current.reset();
    expenseData.current = null;
  }, [isSuccess]);

  return (
    <div>
      <button className="btn bg-blue-capri ml-0" onClick={toggleShowForm}>
        {showForm ? "Close" : "Add Expense"}
      </button>
      {error && <div className="bg-error p-1">{error.data?.error}</div>}
      {showForm && (
        <form
          ref={formRef}
          style={{ maxWidth: "500px" }}
          onSubmit={handleSubmit}
          className="border-form w-full flex flex-col gap-1"
        >
          <input
            name="expense-name"
            type="text"
            placeholder="Expense Name"
            required
          />
          <input
            name="expense-amount"
            type="number"
            placeholder="Amount"
            required
          />
          <input
            name="expense-date"
            type="date"
            min={getMinDate()}
            max={getTodayDate()}
            required
          />
          <SelectExpenseWrapper />
          <button
            disabled={isLoading}
            style={{
              margin: 0,
              fontSize: "1.2rem",
            }}
            className="btn bg-blue-france"
            type="submit"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default NewExpense;

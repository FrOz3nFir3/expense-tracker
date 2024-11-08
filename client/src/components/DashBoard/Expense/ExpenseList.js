import React from "react";
import { usePatchUpdateUserMutation } from "../../../slice/apiSlice";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../slice/authSlice";

// extract this to a separate file also fix the ui
const ExpenseListItem = (props) => {
  const [patchUpdateUser, { isLoading, isSuccess, error }] =
    usePatchUpdateUserMutation();
  const expenseData = React.useRef(null);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );
    if (confirmDelete) {
      expenseData.current = {
        requestType: "expenses/delete",
        expenseId: props.expenseId,
      };
      // call the api to delete the item
      patchUpdateUser(expenseData.current);
    }
  };

  React.useEffect(() => {
    if (!isSuccess || expenseData.current === null) return;

    dispatch(updateUser(expenseData.current));
    expenseData.current = null;
  }, [isSuccess]);

  return (
    <div className="card self-start flow-content">
      {error && <div className="bg-error p-1">{error.data?.error}</div>}
      <div className="flex-only flex-wrap gap-1 justify-between">
        <span>
          Name: <h3>{props.name}</h3>
        </span>
        <div>
          <span>
            Date: <p>{props.date}</p>
          </span>
        </div>

        <span>
          Amount:{" "}
          <strong className="block"> ₹ {props.amount.toLocaleString()}</strong>
        </span>
      </div>

      <div className="flex-only justify-between">
        <span>
          Category: <p>{props.category}</p>
        </span>
        <button
          disabled={isLoading}
          className="btn bg-error"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const ExpenseList = (props) => {
  const items = props.items;

  return (
    <div className="grid-three-columns gap-1">
      {items.map((item) => {
        return (
          <ExpenseListItem
            key={item.expenseId}
            name={item.name}
            date={item.date}
            amount={item.amount}
            category={item.category}
            expenseId={item.expenseId}
          />
        );
      })}
    </div>
  );
};

export default ExpenseList;

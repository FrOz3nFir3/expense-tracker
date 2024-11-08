import React from "react";
import { getCurrentMonthName } from "../../utils/date";
import { useDispatch, useSelector } from "react-redux";
import { selectUserBudget, selectUserExpenses } from "../../slice/authSlice";
import { useButtonToggle } from "../../hooks/useButtonToggle";
import { usePatchUpdateUserMutation } from "../../slice/apiSlice";
import { updateUser } from "../../slice/authSlice";

const SetBudget = (props) => {
  const [patchUpdateUser, { isLoading, isSuccess, error }] =
    usePatchUpdateUserMutation();
  const dispatch = useDispatch();
  const budgetData = React.useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const budget = formData.get("budget");

    budgetData.current = {
      requestType: "budget/set",
      budget: Number(budget),
    };

    patchUpdateUser(budgetData.current);
  };

  React.useEffect(() => {
    if (!isSuccess || !budgetData.current) return;

    dispatch(updateUser(budgetData.current));
    props.toggleBudget();
    budgetData.current = null;
  }, [isSuccess]);

  return (
    <div>
      {error && <div className="bg-error p-1">{error.data?.error}</div>}
      <form onSubmit={handleFormSubmit}>
        <input
          className="max-w-max"
          name="budget"
          type="number"
          defaultValue={props.budget}
        />
        <button disabled={isLoading} type="submit" className="btn btn-small">
          Set
        </button>
      </form>
    </div>
  );
};

const Budget = () => {
  const budget = useSelector(selectUserBudget);
  const exepenses = useSelector(selectUserExpenses);

  const [budgetEdit, toggleBudget] = useButtonToggle(false);

  const currentMonth = getCurrentMonthName();
  const currentExpense = exepenses.reduce((acc, curr) => acc + curr.amount, 0);
  const currentBudget = budget - currentExpense;

  return (
    <div
      className={`inline-block p-1 ${currentBudget >= 0 ? "border-green" : "border-red"} flow-content`}
    >
      <h2>Budget Overview</h2>

      <div>
        Your Current Budget is:
        <span className="inline-block mx-1">
          {budgetEdit ? (
            <SetBudget budget={budget} toggleBudget={toggleBudget} />
          ) : (
            <div className="flex items-center">
              <strong className="text-lg">₹ {budget.toLocaleString()}</strong>
              <button className="btn btn-small" onClick={toggleBudget}>
                Edit
              </button>
            </div>
          )}
        </span>
      </div>

      <div className="flex text-center">
        <div>
          Expense of <strong>{currentMonth}</strong> Month:
          <strong className="block text-lg">
            ₹ {currentExpense.toLocaleString()}
          </strong>
        </div>

        <div>
          Remaining Budget of <strong>{currentMonth}</strong> Month:
          <strong className="block text-lg">
            ₹ {currentBudget.toLocaleString()}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Budget;

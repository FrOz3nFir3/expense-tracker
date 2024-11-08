import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    initialUser(state, action) {
      state.user = action.payload.user;
    },
    updateUser(state, action) {
      if (action.payload.requestType === "expenses/add") {
        state.user.expenses.push(action.payload.expense);
      }

      if (action.payload.requestType === "expenses/delete") {
        state.user.expenses = state.user.expenses.filter(
          (expense) => expense.expenseId !== action.payload.expenseId,
        );
      }

      if (action.payload.requestType === "budget/set") {
        state.user.budget = action.payload.budget;
      }
    },
  },
});
export const { initialUser, updateUser } = authSlicer.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectUserExpenses = (state) => state.auth.user.expenses;
export const selectUserBudget = (state) => state.auth.user.budget;

export default authSlicer;

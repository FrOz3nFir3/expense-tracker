export function setExpenseCategories(category) {
  localStorage.setItem("expense-categories", JSON.stringify(category));
}

export function getExpenseCategories() {
  const value = localStorage.getItem("expense-categories");
  if (!value) return null;
  return JSON.parse(value);
}

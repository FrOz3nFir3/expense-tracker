export function getCurrentMonthName() {
  return new Date().toLocaleString("default", { month: "long" });
}

export function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

export function getMinDate() {
  return `${new Date().getFullYear()}-${new Date().getMonth() + 1}-01`;
}

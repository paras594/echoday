export function formatDate(date) {
  const day = String(date.getDate());
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

export function parseDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return new Date(year, month - 1, day); // Month is zero-based
}

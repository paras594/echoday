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

export function convertTo12HourFormat(time24) {
  // Split the input time into hours and minutes
  const [hours, minutes] = time24.split(":").map(Number);

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12; // Use 12 for 0 or 24 (midnight)

  // Return formatted time
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

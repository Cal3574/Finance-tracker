export function returnDate(date: Date) {
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  return year + "/" + month + "/" + day;
}

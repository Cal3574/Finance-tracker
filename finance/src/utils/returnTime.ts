export function returnTime(date: any) {
  const time = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return time;
}

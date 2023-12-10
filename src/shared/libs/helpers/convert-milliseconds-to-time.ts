export const convertMillisecondsToTime = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const millisecondsEnd = date.getMilliseconds().toString().padStart(3, '0');
  return `${minutes}:${seconds}:${millisecondsEnd}`;
}

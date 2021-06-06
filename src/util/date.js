function getDateFromEpoch(epoch) {
  if (!epoch) return '';
  const date = new Date(epoch * 1000);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${month}.${day}.${year}`;
}

function formatDateString(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${month}/${day}/${year} ${hours}:${minutes}`;
}

export { getDateFromEpoch, formatDateString };


//const now = new Date()


let today = dayjs().$D;

let currentDay = dayjs().$D;

let hour = dayjs().hour();

document.querySelector(".currentDay").innerHTML = ` ${dayjs().format(
  "dddd, MMM D YYYY"
)}`;

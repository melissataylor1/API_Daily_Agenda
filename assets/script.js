let currentDay = `${dayjs().format("dddd, MMM D YYYY")}`;

let currentHour =  `${dayjs().format("H")}`;

var timeBlock = document.querySelector('.time-block');

//date at top
document.querySelector(".currentDay").innerHTML = currentDay;


function bgColor() {
  if (timeBlock.id == currentHour) {
  timeBlock.classList.add(".present");
  timeBlock.style.backgroundColor = "lightblue";
  } else if (timeBlock.id > currentHour){
    timeBlock.classList.add(".past");
    timeBlock.style.backgroundColor = "lightblue";
  } else {
    timeBlock.classList.add(".future");
  }
}

bgColor();

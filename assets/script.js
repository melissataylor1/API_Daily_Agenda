//setting day/time display at top of schedule
$(function () {
  let timeNow = dayjs().format('dddd, MMM D YYYY hh:mm a');
  $("#currentDay").text(timeNow);
});


//Setting up values for time blocks in local stores
$('#7 .description').val(localStorage.getItem('7'));
$('#8 .description').val(localStorage.getItem('8'));
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

// using the save button, info tracked through hour div and text input div, logged to localstorage
$(".saveBtn").on('click', function () {
  let timeBox = $(this).parent().attr('id');
  let inputText = $(this).siblings('.description').val();
  localStorage.setItem(timeBox, inputText);
  console.log(localStorage);
  return;
});

//check to display timeblocks in correct colour on calendar tabs based on current time
let currentTime = parseInt(dayjs().format('HH'));
console.log(currentTime);
$(".time-block").each(function () {
  let divId = parseInt($(this).attr('id'));
  if (divId < currentTime) {
    $(this).addClass('past');
  } else if (divId > currentTime) {
    $(this).addClass('future');
  } else if (divId === currentTime) {
    $(this).addClass('present');
  }
});

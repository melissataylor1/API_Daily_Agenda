//setting day/time display at top of schedule
$(function () {
    let timeNow = dayjs().format('dddd, MMM D YYYY HH:m a');
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

var timeDisplayEl = $('#currentDay');
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
    hourTrack();
  }
  setInterval(displayTime, 1000);
  // fuction to save inputs in the local storage
  $(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
      //set items in local storage.
      localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage.
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // track the hours in the calendar 
function hourTrack(){

  // get current hour
  var currentHr = moment().hour();

  $(".time-block").each(function(){

  // git the id attribute from each raw and split the number from the 
    var blockHr = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHr, currentHr)

    if(blockHr < currentHr){
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if ( blockHr === currentHr){

        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else{

      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }

  })
}


//creating variables
var row1 = $("#row1");
var row2 = $("#row2");
var row3 = $("#row3");
var row4 = $("#row4");
var row5 = $("#row5");
var row6 = $("#row6");
var row7 = $("#row7");
var row8 = $("#row8");
var row9 = $("#row9");

var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".time-block");

$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentDate);
  var currentTime = moment().format("H");
});

var changeColors = function () {
  var now = moment().hour();
  textBoxEl.each(function (index, element) {
    element = $(element);
    if (now > element.attr("data-time")) {
      element.addClass("past").removeClass("future");
    } else if (now === element.attr("data-time")) {
      element.addClass("present").removeClass("future");
    }
  });
};

setInterval(changeColors, 1000);

renderUserInput();

function renderUserInput() {
  var userRow1 = localStorage.getItem("row1");
  $("#row1").val(JSON.parse(userRow1));

  var userRow2 = localStorage.getItem("row2");
  $("#row2").val(JSON.parse(userRow2));

  var userRow3 = localStorage.getItem("row3");
  $("#row3").val(JSON.parse(userRow3));

  var userRow4 = localStorage.getItem("row4");
  $("#row4").val(JSON.parse(userRow4));

  var userRow5 = localStorage.getItem("row5");
  $("#row5").val(JSON.parse(userRow5));

  var userRow6 = localStorage.getItem("row6");
  $("#row6").val(JSON.parse(userRow6));

  var userRow7 = localStorage.getItem("row7");
  $("#row7").val(JSON.parse(userRow7));

  var userRow8 = localStorage.getItem("row8");
  $("#row8").val(JSON.parse(userRow8));

  var userRow9 = localStorage.getItem("row9");
  $("#row9").val(JSON.parse(userRow9));

  if (
    row1 &&
    row2 &&
    row3 &&
    row4 &&
    row5 &&
    row6 &&
    row7 &&
    row8 &&
    row9 === null
  ) {
    return;
  }

  row1.textcontent = userRow1;
  row2.textcontent = userRow2;
  row3.textcontent = userRow3;
  row4.textcontent = userRow4;
  row5.textcontent = userRow5;
  row6.textcontent = userRow6;
  row7.textcontent = userRow7;
  row8.textcontent = userRow8;
  row9.textcontent = userRow9;
}

saveBtnEl.on("click", function (event) {
  event.preventDefault();
  var input1 = $("#row1").val();
  localStorage.setItem("#row1", JSON.stringify(input1));

  var input1 = $("#row2").val();
  localStorage.setItem("#row2", JSON.stringify(input2));

  var input1 = $("#row3").val();
  localStorage.setItem("#row3", JSON.stringify(input3));

  var input1 = $("#row4").val();
  localStorage.setItem("#row4", JSON.stringify(input4));

  var input1 = $("#row5").val();
  localStorage.setItem("#row5", JSON.stringify(input5));

  var input1 = $("#row6").val();
  localStorage.setItem("#row6", JSON.stringify(input6));

  var input1 = $("#row7").val();
  localStorage.setItem("#row7", JSON.stringify(input7));

  var input1 = $("#row8").val();
  localStorage.setItem("#row8", JSON.stringify(input8));

  var input1 = $("#row9").val();
  localStorage.setItem("#row9", JSON.stringify(input9));

  retrieveUserInput();
});

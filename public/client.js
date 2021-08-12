$(document).ready(function () {
  var food;
  $("#search").click(function () {
    food = $("#food").val();
    console.log(food);
    $.post("http://localhost:80/submit", {
      food: food,
    }, function (data) {});
  });
});
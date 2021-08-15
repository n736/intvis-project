const margin = {
  top: 150,
  right: 70,
  bottom: 110,
  left: 100
};
// width = * ,
// height = * ;

const id = 409777;

d3.json(getURL(id), function (data) {

  console.log(data);

  var svg = d3.select("svg");

  const nutrition = data["nutrition"];
  piechart("Calories", nutrition["calories"], 2000, 100, 100);
  piechart("Fats", gramsToInt(nutrition["fat"]), 75, 300, 300);
  piechart("Proteins", gramsToInt(nutrition["protein"]), 100, 500, 500);
  piechart("Sugar", gramsToInt(nutrition["nutrients"]["Sugar"]), 40, 700, 700);
  piechart("Carbs", gramsToInt(nutrition["carbs"]), 2000, 900, 900);






})

function gramsToInt(grams) {
  return Number(grams.substr(0, grams.length - 2));
}
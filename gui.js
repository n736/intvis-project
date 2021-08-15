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

  const nutrition = data["nutrition"];

  var svg = d3.select("svg");

  piechart("Calories", nutrition["calories"], 2000, 200, 500);
  piechart("Fats", gramsToInt(nutrition["fat"]), 75, 300, 300);
  piechart("Proteins", gramsToInt(nutrition["protein"]), 100, 500, 500);
  piechart("Sugars", nutrition["nutrients"][11]["amount"], 40, 700, 700);
  piechart("Carbs", gramsToInt(nutrition["carbs"]), 200, 900, 900);
})

function gramsToInt(grams) {
  return Number(grams.substr(0, grams.length - 1));
}
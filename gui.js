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

  piechart("Calories", nutrition["calories"], 2000, 250, 500);
  piechart("Fats", gramsToInt(nutrition["fat"]), 75, 625, 175);
  piechart("Proteins", gramsToInt(nutrition["protein"]), 100, 625, 500);
  piechart("Sugars", nutrition["nutrients"][11]["amount"], 40, 1000, 175);
  piechart("Carbohydrates", gramsToInt(nutrition["carbs"]), 200, 1000, 500);
})

function gramsToInt(grams) {
  return Number(grams.substr(0, grams.length - 1));
}
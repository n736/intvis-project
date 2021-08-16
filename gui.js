const margin = {
  top: 150,
  right: 70,
  bottom: 110,
  left: 100
};
// width = * ,
// height = * ;

const id = 409777;

// d3.json(getURL(id), function (data) {

//   console.log(data);

var svg = d3.select("svg");

const nutrition = data["nutrition"];

var img_bck = d3.select("svg").append('rect')
  .attr("rx", 15)
  .attr("ry", 15)
  .attr('x', 132.5)
  .attr('y', 60)
  .attr('width', 240)
  .attr('height', 255)
  .attr('fill', '#fff')

var img = d3.select("svg").selectAll("image").data([0]).enter().append("svg:image")
  .attr("href", data["image"] )
  .attr("width", 200)
  .attr("height", 200)
  .attr("x", 152.5)
  .attr("y", 75);

var img_name = d3.select("svg").append("text")
  .attr("x", 250)             
  .attr("y", 300)
  .attr("text-anchor", "middle")
  .attr("font-weight", 800)
  .attr("font-family", "Arial")
  .style("font-size", "14px")
  .text( data["title"].substr(0, 28) )


var pies = [];
pies.push(piechart("Calories", nutrition["calories"], 2000, 250, 515));
pies.push(piechart("Fats", gramsToInt(nutrition["fat"]), 75, 625, 160));
pies.push(piechart("Proteins", gramsToInt(nutrition["protein"]), 100, 625, 515));
pies.push(piechart("Sugars", nutrition["nutrients"][11]["amount"], 40, 1000, 160));
pies.push(piechart("Carbohydrates", gramsToInt(nutrition["carbs"]), 200, 1000, 515));

var texts = [];

var state = 6;
var rect = svg.append("rect").on("click", function () {
  state = updateState();
  pies.forEach(pie => {
    pie.attr("opacity", state == 8 ? 1 : 0)
  })
  texts.forEach(pie => {
    pie.attr("opacity", state == 6 ? 1 : 0)
  })
});

function gramsToInt(grams) {
  return Number(grams.substr(0, grams.length - 1));
}

function updateState() {
  return state == 6 ? 8 : 6;
}
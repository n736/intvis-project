const margin = {
  top: 150,
  right: 70,
  bottom: 110,
  left: 100
};
// width = * ,
// height = * ;

const id = 228341;
var state = 6;

d3.json(getURL(id), function (data) {

  console.log(data);

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
    .attr("href", (data["images"] != null && data["images"].length > 0) ? data["images"][data["images"].length - 1] : (data["image"] != null ? data["image"] : null))
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
    .text(data["title"].substr(0, 28))

  var pies = [];
  pies.push(piechart("Calories", nutrition["calories"], 2000, 250, 515));
  pies.push(piechart("Fats", gramsToInt(nutrition["fat"]), 75, 625, 160));
  pies.push(piechart("Proteins", gramsToInt(nutrition["protein"]), 100, 625, 515));
  pies.push(piechart("Sugars", getSugar(nutrition["nutrients"]), 40, 1000, 160));
  pies.push(piechart("Carbohydrates", gramsToInt(nutrition["carbs"]), 200, 1000, 515));
  pies.forEach(pie => {
    pie.attr("opacity", state == 8 ? 1 : 0)
  })

  var stats = [];
  stats.push(stat("Calories", nutrition["calories"], 450, 150));
  stats.push(stat("Fats", gramsToInt(nutrition["fat"]), 450, 200));
  stats.push(stat("Proteins", gramsToInt(nutrition["protein"]), 450, 250));
  stats.push(stat("Sugars", getSugar(nutrition["nutrients"]), 750, 250));
  stats.push(stat("Carbohydrates", gramsToInt(nutrition["carbs"]), 750, 200));


  d3.select("#button")
    // .attr("x", 1200).attr("y", 100)
    // .attr("width", 100).attr("height", 100)
    // .attr("fill", "black")
    .on("click", () => {
      state = updateState();
      pies.forEach(pie => {
        pie.attr("opacity", state == 8 ? 1 : 0)
      })
      stats.forEach(statistic => {
        statistic.attr("opacity", state == 6 ? 1 : 0)
      })
      d3.select("#calc").style("display", state == 6 ? "block" : "none");
      svg.attr("height", state == 6 ? 350 : 700);
    });
});

function gramsToInt(grams) {
  return Number(grams.substr(0, grams.length - 1));
}

function updateState() {
  return state == 6 ? 8 : 6;
}

function getSugar(nutrients) {
  var amount = 0;
  nutrients.forEach(nutrient => {
    if (nutrient["name"] == "Sugar") amount = nutrient["amount"];
  })
  return amount;
}

function stat(type, food_value, cx, cy) {
  var svg = d3.select("svg"),
    g = svg.append("g").attr("transform", "translate(" + cx + "," + cy + ")");

  msg = g.append("text")
    .attr("x", 0)
    .attr("y", 0)
    .attr("text-anchor", "front")
    .attr("font-weight", 800)
    .attr("font-family", "Arial")
    .style("font-size", "22px")
    .text(type + " : " + food_value + (type == "Calories" ? "" : " g"));

  return g;
}
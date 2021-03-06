function piechart(type, food_value, daily_value, cx, cy, color) {
  // Amount in the food goes here
  let food = food_value;
  //Amount per day goes here
  let per_day = daily_value;
  //Ensure our Pie Chart looks right
  let excess = per_day - food;

  var data = [food, excess];

  var svg = d3.select("svg"),
    width = 200,
    height = 200,
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + cx + "," + cy + ")");

  background = g.append('rect')
    .attr("rx", 15)
    .attr("ry", 15)
    .attr('x', -120)
    .attr('y', -127.5)
    .attr('width', 240)
    .attr('height', 255)
    .attr('fill', color);

  header = g.append("text")
    .attr("x", 0)
    .attr("y", -height / 2 - 7.5)
    .attr("text-anchor", "middle")
    .attr("font-weight", 800)
    .attr("font-family", "Arial")
    .style("font-size", "16px")
    .text(type);

  tail = g.append("text")
    .attr("x", 0)
    .attr("y", height / 2 + 17.5)
    .attr("text-anchor", "middle")
    .attr("font-weight", 800)
    .attr("font-family", "Arial")
    .style("font-size", "16px")
    .text("(" + food + (type == "Calories" ? "" : "g") + " out of " + daily_value.toFixed(0) + (type == "Calories" ? "" : "g") + ")");


  /* Common Colors For Food Types
  Calories : #5C4EB1
  Carbohydrates : '#2DAA43'
  Proteins : #D04125
  Fats : #DA8D2A
  Sugars : #6BD1C2
  Background : #DED9D3 */

  let primary = '#5C4EB1';
  if (type == "Carbohydrates") {
    primary = '#2DAA43'
  } else if (type == "Proteins") {
    primary = '#D04125';
  } else if (type == "Fats") {
    primary = '#DA8D2A';
  } else if (type == "Sugars") {
    primary = '#6BD1C2';
  }

  var color = d3.scaleOrdinal([primary, '#DED9D3']);

  // Generate the pie
  var pie = d3.pie();

  // Generate the arcs
  var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  //Generate groups
  var arcs = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc")

  //Draw arc paths
  arcs.append("path")
    .attr("fill", function (d, i) {
      return color(i);
    })
    .attr("d", arc);
  
  middle = g.append("text")
    .attr("x", 0 + 10)
    .attr("y", height / 2 - 95)
    .attr("text-anchor", "middle")
    .attr("font-weight", 800)
    .attr("font-family", "Arial")
    .style("font-size", "22px")
    .text(((food / per_day) * 100).toFixed(2) + "%");

  return g;
}
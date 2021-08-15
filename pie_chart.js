function piechart(type, food_value, daily_value) {
	// Amount in the food goes here
	let food = food_value;
	//Amount per day goes here
	let per_day = daily_value;
	//Ensure our Pie Chart looks right
	let excess = per_day - food;

	var data = [food, excess];

	var svg = d3.select("svg"),
		width = 250,
		height = 250,
		radius = Math.min(width, height) / 2,
		g = svg.append("g").attr("transform", "translate(" + width + "," + height + ")");
		header = svg.append("text")
				.attr("x", (width / 2))             
				.attr("y", 20 )
				.attr("text-anchor", "middle")  
				.style("font-size", "16px") 
				.style("text-decoration", "underline")  
				.text("Value vs Date Graph");


	/* Common Colors For Food Types
	Calories : #5C4EB1
	Carbohydrates : '#2DAA43'
	Proteins : #D04125
	Fats : #DA8D2A
	Sugars : #6BD1C2
	Background : #DED9D3 */

	let primary = '#5C4EB1';
	if(type == "Carbohydrates") {
		primary = '#2DAA43'
	} else if(type == "Proteins") {
		primary = '#D04125';
	} else if(type == "Fats") {
		primary = '#DA8D2A';
	} else if(type == "Sugars") {
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
		.attr("fill", function(d, i) {
			return color(i);
		})
		.attr("d", arc);

	//Print the percentage value under the pie chart

	
	return 0;
}
function piechart(type, food_value, daily_value) {
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
		g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


	/* Common Colors For Food Types
	Calories : #5C4EB1
	Carbohydrates : '#5C4EB1'
	Proteins : #D04125
	Fats : #DA8D2A
	Sugars : #D7DF26
	Background : #DED9D3 */
	let primary = '#5C4EB1';
	if(type == "Carbs") {
		primary = '#5C4EB1'
	} else if(type == "Proteins") {
		primary = '#D04125';
	} else if(type == "Fats") {
		primary = '#DA8D2A';
	} else if(type == "Sugars") {
		primary = '#D7DF26';
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
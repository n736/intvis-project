const margin = {
  top: 150,
  right: 70,
  bottom: 110,
  left: 100
};
// width = * ,
// height = * ;

const id = 228341;
var state = 0;

//d3.json(getURL(id), function (data) {
data = {
  "id": 409777,
  "title": "Gatorade Prime Fuel Bar Peanut Butter Chocolate",
  "price": 0.0,
  "likes": 0,
  "badges": ["egg_free", "msg_free", "no_artificial_colors", "peanut_free", "no_artificial_flavors", "no_artificial_ingredients", "nut_free"],
  "importantBadges": ["no_artificial_flavors", "no_artificial_colors", "no_artificial_ingredients", "nut_free", "peanut_free", "egg_free"],
  "nutrition": {
    "nutrients": [{
      "name": "Calcium",
      "title": "Calcium",
      "amount": 40.0,
      "unit": "mg",
      "percentOfDailyNeeds": 4.0
    }, {
      "name": "Carbohydrates",
      "title": "Carbohydrates",
      "amount": 45.0,
      "unit": "g",
      "percentOfDailyNeeds": 15.0
    }, {
      "name": "Cholesterol",
      "title": "Cholesterol",
      "amount": 0.0,
      "unit": "mg",
      "percentOfDailyNeeds": 0.0
    }, {
      "name": "Calories",
      "title": "Calories",
      "amount": 230.0,
      "unit": "kcal",
      "percentOfDailyNeeds": 11.5
    }, {
      "name": "Fat",
      "title": "Fat",
      "amount": 3.5,
      "unit": "g",
      "percentOfDailyNeeds": 5.38
    }, {
      "name": "Saturated Fat",
      "title": "Saturated Fat",
      "amount": 1.0,
      "unit": "g",
      "percentOfDailyNeeds": 6.25
    }, {
      "name": "Trans Fat",
      "title": "Trans Fat",
      "amount": 0.0,
      "unit": "g",
      "percentOfDailyNeeds": 0.0
    }, {
      "name": "Fiber",
      "title": "Fiber",
      "amount": 2.0,
      "unit": "g",
      "percentOfDailyNeeds": 8.0
    }, {
      "name": "Iron",
      "title": "Iron",
      "amount": 1.08,
      "unit": "mg",
      "percentOfDailyNeeds": 6.0
    }, {
      "name": "Protein",
      "title": "Protein",
      "amount": 5.0,
      "unit": "g",
      "percentOfDailyNeeds": 10.0
    }, {
      "name": "Sodium",
      "title": "Sodium",
      "amount": 180.0,
      "unit": "mg",
      "percentOfDailyNeeds": 7.83
    }, {
      "name": "Sugar",
      "title": "Sugar",
      "amount": 18.0,
      "unit": "g",
      "percentOfDailyNeeds": 20.0
    }, {
      "name": "Vitamin A",
      "title": "Vitamin A",
      "amount": 0.0,
      "unit": "IU",
      "percentOfDailyNeeds": 0.0
    }, {
      "name": "Vitamin C",
      "title": "Vitamin C",
      "amount": 0.0,
      "unit": "mg",
      "percentOfDailyNeeds": 0.0
    }, {
      "name": "Net Carbohydrates",
      "title": "Net Carbohydrates",
      "amount": 43.0,
      "unit": "g",
      "percentOfDailyNeeds": 15.64
    }],
    "caloricBreakdown": {
      "percentProtein": 8.64,
      "percentFat": 13.61,
      "percentCarbs": 77.75
    },
    "calories": 230.0,
    "fat": "3.5g",
    "protein": "5g",
    "carbs": "45g"
  },
  "servings": {
    "number": 1.0,
    "size": 1.0,
    "unit": "bar"
  },
  "spoonacularScore": 0.0,
  "breadcrumbs": ["peanut butter", "nut butter", "spread", "menu item type"],
  "aisle": "Nut butters, Jams, and Honey",
  "description": "Fuel for athletes.Sales sample. Not for retail sale.Gatorade, Gatorade Prime, and G design are registered trademarks of S-VC, Inc.Comments? 1-800-884-2867 or visit gatorade.com.Partially produced with genetic engineering.Â© 2016 S-VC, Inc.",
  "image": "https://spoonacular.com/productImages/409777-312x231.jpg",
  "imageType": "jpg",
  "images": ["https://spoonacular.com/productImages/409777-90x90.jpg", "https://spoonacular.com/productImages/409777-312x231.jpg", "https://spoonacular.com/productImages/409777-636x393.jpg"],
  "generatedText": null,
  "upc": "052000013184",
  "brand": "Gatorade",
  "ingredients": [{
    "name": "added sugar",
    "safety_level": null,
    "description": null
  }, {
    "name": "additive",
    "safety_level": null,
    "description": null
  }, {
    "name": "alkali",
    "safety_level": null,
    "description": null
  }, {
    "name": "antioxidant",
    "safety_level": null,
    "description": null
  }, {
    "name": "barley malt",
    "safety_level": null,
    "description": null
  }, {
    "name": "cocoa powder",
    "safety_level": null,
    "description": null
  }, {
    "name": "cooking fat",
    "safety_level": null,
    "description": null
  }, {
    "name": "cooking oil",
    "safety_level": null,
    "description": null
  }, {
    "name": "corn extract",
    "safety_level": null,
    "description": null
  }, {
    "name": "corn syrup solids",
    "safety_level": "medium",
    "description": null
  }, {
    "name": "corn syrup",
    "safety_level": null,
    "description": null
  }, {
    "name": "crisp rice",
    "safety_level": null,
    "description": null
  }, {
    "name": "diglycerides",
    "safety_level": null,
    "description": null
  }, {
    "name": "drink",
    "safety_level": null,
    "description": null
  }, {
    "name": "dry whey",
    "safety_level": "high",
    "description": null
  }, {
    "name": "emulsifier",
    "safety_level": null,
    "description": null
  }, {
    "name": "extract",
    "safety_level": null,
    "description": null
  }, {
    "name": "flour product",
    "safety_level": null,
    "description": null
  }, {
    "name": "gluten free flour",
    "safety_level": null,
    "description": null
  }, {
    "name": "glycerin",
    "safety_level": "high",
    "description": null
  }, {
    "name": "grains",
    "safety_level": null,
    "description": null
  }, {
    "name": "honey",
    "safety_level": null,
    "description": null
  }, {
    "name": "hydroxylated soy lecithin",
    "safety_level": null,
    "description": null
  }, {
    "name": "invert sugar",
    "safety_level": "high",
    "description": null
  }, {
    "name": "lactose",
    "safety_level": null,
    "description": null
  }, {
    "name": "lecithin",
    "safety_level": null,
    "description": null
  }, {
    "name": "low calorie sweetener",
    "safety_level": null,
    "description": null
  }, {
    "name": "malt",
    "safety_level": null,
    "description": null
  }, {
    "name": "malted barley",
    "safety_level": null,
    "description": null
  }, {
    "name": "menu item type",
    "safety_level": null,
    "description": null
  }, {
    "name": "mineral",
    "safety_level": null,
    "description": null
  }, {
    "name": "mono",
    "safety_level": null,
    "description": null
  }, {
    "name": "natural flavor",
    "safety_level": "medium",
    "description": "The term \"natural flavors\" can hide a lot of <a href=\"http://www.cspinet.org/reports/chemcuisine.htmpotentially\"> gross sources of flavor</a>, such as the notorious castoreum from the anal sacs of beavers. Of course, this does not mean these flavorings are harmful, but since you cannot really be sure of what you are getting, it is wise to be cautious."
  }, {
    "name": "nonfat dry milk",
    "safety_level": null,
    "description": null
  }, {
    "name": "non food item",
    "safety_level": null,
    "description": null
  }, {
    "name": "nutrient",
    "safety_level": null,
    "description": null
  }, {
    "name": "oats",
    "safety_level": null,
    "description": null
  }, {
    "name": "palm kernel oil",
    "safety_level": null,
    "description": null
  }, {
    "name": "palm oil",
    "safety_level": null,
    "description": null
  }, {
    "name": "powdered milk",
    "safety_level": null,
    "description": null
  }, {
    "name": "preservative",
    "safety_level": null,
    "description": null
  }, {
    "name": "processed",
    "safety_level": null,
    "description": null
  }, {
    "name": "refined sweetener",
    "safety_level": null,
    "description": null
  }, {
    "name": "rice flour",
    "safety_level": null,
    "description": null
  }, {
    "name": "salt",
    "safety_level": null,
    "description": null
  }, {
    "name": "sorbitol",
    "safety_level": "medium",
    "description": null
  }, {
    "name": "soy lecithin",
    "safety_level": "high",
    "description": "Soy lecithin is <a href=\"http://farrp.unl.edu/resources/gi-fas/opinion-and-summaries/soy-lecithin\">not a concern</a> for most people allergic to soy."
  }, {
    "name": "starch",
    "safety_level": null,
    "description": null
  }, {
    "name": "sugar",
    "safety_level": null,
    "description": null
  }, {
    "name": "sugar",
    "safety_level": null,
    "description": null
  }, {
    "name": "sugar alcohol",
    "safety_level": null,
    "description": null
  }, {
    "name": "sugar substitute",
    "safety_level": null,
    "description": null
  }, {
    "name": "sunflower oil",
    "safety_level": null,
    "description": null
  }, {
    "name": "supplement",
    "safety_level": null,
    "description": null
  }, {
    "name": "sweetener",
    "safety_level": null,
    "description": null
  }, {
    "name": "tocopherols",
    "safety_level": "high",
    "description": null
  }, {
    "name": "unrefined sweetener",
    "safety_level": null,
    "description": null
  }, {
    "name": "vanilla extract",
    "safety_level": null,
    "description": null
  }, {
    "name": "vegetable oil",
    "safety_level": null,
    "description": null
  }, {
    "name": "vegetable oil",
    "safety_level": null,
    "description": null
  }, {
    "name": "vitamin",
    "safety_level": null,
    "description": null
  }, {
    "name": "vitamin e",
    "safety_level": null,
    "description": null
  }, {
    "name": "water",
    "safety_level": null,
    "description": null
  }, {
    "name": "wheat",
    "safety_level": null,
    "description": null
  }, {
    "name": "wheat starch",
    "safety_level": "high",
    "description": "Wheat starch can be processed to remove enough of the gluten to make it gluten free (<a href=\"http://www.glutafin.co.uk/coeliac-students/codex-wheat-starch/\">legally speaking</a>) but it may be wise to avoid products with wheat starch unless they specifically state they are suitable for gluten free diets."
  }, {
    "name": "whole grain rolled oats",
    "safety_level": null,
    "description": null
  }, {
    "name": "whole grain rolled wheat",
    "safety_level": null,
    "description": null
  }],
  "ingredientCount": 36,
  "ingredientList": "Whole Grain Rolled Oats, Invert Sugar, Sugar, Whole Grain Rolled Wheat, Crisp Rice (Rice Flour, Sugar, Malt [Malted Barley and Corn Extract, Wheat Starch, Hydroxylated Soy Lecithin], Salt), Corn Syrup Solids, Crisp Rice (Rice Flour, Sugar, Barley Malt, Salt, Mono and Diglycerides), Nonfat Dry Milk, Glycerin, Honey, Sunflower Oil, Sorbitol, Water, Vegetable Oil (Palm Kernel and Palm Oil), Salt, Natural Flavor, Cocoa (Processed with Alkali), Cocoa Powder, Dry Whey, Soy Lecithin, Lactose, Tocopherols (Preservative), Vanilla Extract"
}

console.log(data);
var calc = null

var svg = d3.select("svg");

const nutrition = data["nutrition"];

//STATE 0 VVV
var resturaunts = ["Burger King", "Chick-Fil-A", "Chipotle", "Dominoes", "Dunkin' Donuts", "Five Guys", 
"Hardee's", "Jimmy John's", "KFC", "McDonald's", "Panera Bread", "Papa John's", "Pizza Hut", "Sonic", "Starbucks",
"Subway", "Taco Bell", "Wendy's", "Whataburger"];

let i = 1;
var rest_img = [];

resturaunts.forEach(rest => {
  rest_img.push(create_image( "./resturaunt_pics/" + rest + ".png" , rest, (i%5) * 100, Math.floor(i/5) * 200) );
  i++;
})

//STATE 1 VVV

//DNE

//STATE 2 VVV

//Create the Picture of the food
let image = (data["images"] != null && data["images"].length > 0) ? data["images"][data["images"].length - 1] : (data["image"] != null ? data["image"] : null);
var food_image = create_image( image, data["title"], 132.5, 60, false);
food_image.attr("opacity", (state == 2 || state == 3) ? 1 : 0);

var stats = [];
stats.push(stat("Calories", nutrition["calories"], 450, 150));
stats.push(stat("Fats", gramsToInt(nutrition["fat"]), 450, 200));
stats.push(stat("Proteins", gramsToInt(nutrition["protein"]), 450, 250));
stats.push(stat("Sugars", getSugar(nutrition["nutrients"]), 750, 250));
stats.push(stat("Carbohydrates", gramsToInt(nutrition["carbs"]), 750, 200));

//STATE 3 VVV

var pies = [];

var see_my_stats = d3.select("#button")
  .on("click", function () {
    state = updateState();

    calc = new Calculator(
      Number(d3.select("#weight").node().value),
      Number(d3.select("#heightft").node().value),
      Number(d3.select("#heightin").node().value),
      Number(d3.select("#age").node().value),
      d3.select('input[name="sex"]:checked').node().value,
      d3.select('input[name="losingweight"]:checked').node().value,
      d3.select('input[name="actlvl"]:checked').node().value
    );

    pies.push(piechart("Calories", nutrition["calories"], calc.calories(), 250, 515));
    pies.push(piechart("Fats", gramsToInt(nutrition["fat"]), calc.fats(), 625, 160));
    pies.push(piechart("Proteins", gramsToInt(nutrition["protein"]), calc.proteins(), 625, 515));
    pies.push(piechart("Sugars", getSugar(nutrition["nutrients"]), calc.sugars(), 1000, 160));
    pies.push(piechart("Carbohydrates", gramsToInt(nutrition["carbs"]), calc.carbs(), 1000, 515));

    pies.forEach(pie => {
      pie.attr("opacity", state == 3 ? 1 : 0);
    })
    stats.forEach(statistic => {
      statistic.attr("opacity", state == 2 ? 1 : 0);
    })
    d3.select("#calc").style("display", state == 2 ? "block" : "none");
    svg.attr("height", state == 2 ? 350 : 700);
  });

console.log(see_my_stats);

//BACK BUTTON VVV

var go_back = d3.select("#back_button")
  .on("click", function () {
    state = (state == 0) ? state : state - 1;

    if (stats != null) {
      stats.forEach(statistic => {
        statistic.attr("opacity", state == 2 ? 1 : 0)
      })
    }
    if (pies != null) {
      pies.forEach(pie => {
        pie.attr("opacity", state == 3 ? 1 : 0);
      })
    }
    food_image.attr("opacity", (state == 2 || state == 3) ? 1 : 0);
    d3.select("#calc").style("display", state == 2 ? "block" : "none");
    svg.attr("height", state == 2 ? 350 : 700);

  });
// });

function gramsToInt(grams) {
  return Number(grams.substr(0, grams.length - 1));
}

function updateState() {
  return state == 2 ? 3 : 2;
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

function create_image(image, title, x, y, click) {
  var svg = d3.select("svg"),
  g = svg.append("g");
  
  img_back = g.append('rect')
  .attr("rx", 15)
  .attr("ry", 15)
  .attr('x', x)
  .attr('y', y)
  .attr('width', 240)
  .attr('height', 255)
  .attr('fill', '#fff')

  img = g.selectAll("image").data([0]).enter().append("svg:image")
  .attr("href", image)
  .attr("width", 200)
  .attr("height", 200)
  .attr("x", x + 20)
  .attr("y", y + 15)

  img_name = g.append("text")
  .attr("x", x + 117.5)
  .attr("y", y + 240)
  .attr("text-anchor", "middle")
  .attr("font-weight", 800)
  .attr("font-family", "Arial")
  .style("font-size", "14px")
  .text(title.substr(0, 25));

  return g;
}
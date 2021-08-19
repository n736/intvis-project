const margin = {
  top: 150,
  right: 70,
  bottom: 110,
  left: 100
};
// width = * ,
// height = * ;

var state = 0;

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

var calc = null

const heights = [0, 0, 350, 700]

var svg = d3.select("#visualization");

var nutrition = {}

var pies = [];
var stats = [];

var current_rest = "";

var quantity = 1;

var food_image;
var rest_image;

var search_button = d3.select("#search_button")
  .on("click", function () {
    let current_food = d3.select("#search_input").node().value;
    if (typeof current_food == "undefined" || current_food == "") {
      d3.select("#search_button").style("color", "red");
      return;
    }
    d3.select("#search_button").style("color", "black");

    state = nextState(state);

    // search with current_rest and current_food for ID
    d3.json(searchFood(current_rest, current_food, 1), (data) => {
      console.log(data);
      menuItems = data["menuItems"];
      if (menuItems.length < 1) return;
      if (menuItems[0]["title"].toLowerCase() == current_food.toLowerCase() &&
        menuItems[0]["restaurantChain"].toLowerCase() == current_rest.toLowerCase()) {
        d3.json(searchID(menuItems[0]["id"]), function (data) {
          //Create the Picture of the food
          let image = (data["images"] != null && data["images"].length > 0) ? data["images"][data["images"].length - 1] : (data["image"] != null ? data["image"] : null);
          food_image = create_image(image, data["title"], 50 + 275, 75, false, false);

          console.log(data);
          nutrition = data["nutrition"];

          stats = [];
          stats.push(stat("Calories", nutrition["calories"], 325 + 275, 75, '#AA6BFF'));
          stats.push(stat("Fats", gramsToInt(nutrition["fat"]), 325 + 275, 172.5, '#FFB45A'));
          stats.push(stat("Proteins", gramsToInt(nutrition["protein"]), 325 + 275, 270, '#FF5959'));
          stats.push(stat("Sugars", getSugar(nutrition["nutrients"]), 600 + 275, 172.5, '#99ECE8'));
          stats.push(stat("Carbohydrates", gramsToInt(nutrition["carbs"]), 600 + 275, 270, '#6BE275'));

          stats.forEach(statistic => {
            statistic.attr("opacity", state == 2 ? 1 : 0);
          })
        })
      } else {
        d3.json(searchFood(current_rest, current_food, 100), (data) => {
          console.log(data);
          menuItems = data["menuItems"];
          let found = false;
          menuItems.forEach(item => {
            if (item["title"].toLowerCase() == current_food.toLowerCase() &&
              item["restaurantChain"].toLowerCase() == current_rest.toLowerCase()) {
              found = true;
              d3.json(searchID(item["id"]), function (data) {
                //Create the Picture of the food
                let image = (data["images"] != null && data["images"].length > 0) ? data["images"][data["images"].length - 1] : (data["image"] != null ? data["image"] : null);
                food_image = create_image(image, data["title"], 50 + 275, 75, false, false);

                console.log(data);
                nutrition = data["nutrition"];

                stats = [];
                stats.push(stat("Calories", nutrition["calories"], 325 + 275, 75, '#AA6BFF'));
                stats.push(stat("Fats", gramsToInt(nutrition["fat"]), 325 + 275, 172.5, '#FFB45A'));
                stats.push(stat("Proteins", gramsToInt(nutrition["protein"]), 325 + 275, 270, '#FF5959'));
                stats.push(stat("Sugars", getSugar(nutrition["nutrients"]), 600 + 275, 172.5, '#99ECE8'));
                stats.push(stat("Carbohydrates", gramsToInt(nutrition["carbs"]), 600 + 275, 270, '#6BE275'));

                stats.forEach(statistic => {
                  statistic.attr("opacity", state == 2 ? 1 : 0);
                })
              })
            }
          })
          if (!found) {
            d3.json(searchID(menuItems[0]["id"]), function (data) {
              //Create the Picture of the food
              let image = (data["images"] != null && data["images"].length > 0) ? data["images"][data["images"].length - 1] : (data["image"] != null ? data["image"] : null);
              food_image = create_image(image, data["title"], 50 + 275, 75, false, false);

              console.log(data);
              nutrition = data["nutrition"];

              stats = [];
              stats.push(stat("Calories", nutrition["calories"], 325 + 275, 75, '#AA6BFF'));
              stats.push(stat("Fats", gramsToInt(nutrition["fat"]), 325 + 275, 172.5, '#FFB45A'));
              stats.push(stat("Proteins", gramsToInt(nutrition["protein"]), 325 + 275, 270, '#FF5959'));
              stats.push(stat("Sugars", getSugar(nutrition["nutrients"]), 600 + 275, 172.5, '#99ECE8'));
              stats.push(stat("Carbohydrates", gramsToInt(nutrition["carbs"]), 600 + 275, 270, '#6BE275'));

              stats.forEach(statistic => {
                statistic.attr("opacity", state == 2 ? 1 : 0);
              })
            })
          }
        })
      }
      // else {
      //   // search all items for it
      // }
      // otherwise set id to -2 to break the while loop afterwards

    })
    rest_image = create_image("resturaunt_pics/" + current_rest + ".png", current_rest, 50, 75, false, true);
    stats_title = create_title("Nutrition Facts", "#visualization")

    // nutrition = data["nutrition"];

    // stats = [];
    // d3.select("#stats").remove();

    // stats.push(stat("Calories", nutrition["calories"], 325 + 275, 75, '#AA6BFF'));
    // stats.push(stat("Fats", gramsToInt(nutrition["fat"]), 325 + 275, 172.5, '#FFB45A'));
    // stats.push(stat("Proteins", gramsToInt(nutrition["protein"]), 325 + 275, 270, '#FF5959'));
    // stats.push(stat("Sugars", getSugar(nutrition["nutrients"]), 600 + 275, 172.5, '#99ECE8'));
    // stats.push(stat("Carbohydrates", gramsToInt(nutrition["carbs"]), 600 + 275, 270, '#6BE275'));

    // stats.forEach(statistic => {
    //   statistic.attr("opacity", state == 2 ? 1 : 0);
    // })

    d3.select("#calc").style("display", state == 2 ? "block" : "none");
    d3.select("#search").style("display", state == 1 ? "block" : "none");

    svg.attr("height", heights[state]);
  });

//STATE 0 VVV
var resturaunts = ["Burger King", "Chick-fil-A", "Chipotle", "Dominoes", "Dunkin' Donuts", "Five Guys",
  "Hardee's", "Jimmy John's", "KFC", "McDonald's", "Panera Bread", "Papa John's", "Pizza Hut", "Sonic", "Starbucks",
  "Subway", "Taco Bell", "Wendy's", "Whataburger"
];

let i = 0;
var rest_g_arr = []
resturaunts.forEach(rest => {
  let rest_g = create_image("resturaunt_pics/" + rest + ".png", rest, (i % 4) * 275 + 50, 75 + Math.floor(i / 4) * 275, true, false);
  rest_g_arr.push(rest_g);
  rest_g.attr("id", resturaunts[i]);
  rest_g.on("click", () => {
    state = nextState(state);
    current_rest = rest_g.attr("id");
    document.getElementById('resturaunt_image').src = "resturaunt_pics/" + current_rest + ".png";
    document.getElementById('restaurant_name').innerHTML = current_rest;

    d3.select("#search").style("display", "block");
    go_back.style("display", "block")

    d3.select("#start").attr("height", 0);

    d3.select("#search").style("display", "block");
    svg.attr("height", heights[state]);
  });
  i++;
})

var rest_title = create_title("Choose A Restaurant", "#start");

var see_my_stats = d3.select("#button")
  .on("click", function () {
    if (typeof d3.select("#weight").node().value == "undefined" ||
      d3.select("#weight").node().value == "" ||
      typeof d3.select("#heightft").node().value == "undefined" ||
      d3.select("#heightft").node().value == "" ||
      typeof d3.select("#age").node().value == "undefined" ||
      d3.select("#age").node().value == "") {
      d3.select("#button").style("color", "red");
      return;
    }
    try {
      calc = new Calculator(
        Number(d3.select("#weight").node().value),
        Number(d3.select("#heightft").node().value),
        Number(d3.select("#heightin").node().value),
        Number(d3.select("#age").node().value),
        d3.select('input[name="sex"]:checked').node().value,
        d3.select('input[name="losingweight"]:checked').node().value,
        d3.select('input[name="actlvl"]:checked').node().value
      );
    } catch (error) {
      d3.select("#button").style("color", "red");
      return;
    }
    d3.select("#button").style("color", "black");

    state = nextState(state);

    pies.push(piechart("Calories", quantity * nutrition["calories"], calc.calories(), 720 + 275, 202.5, '#D8BAFF'));
    pies.push(piechart("Fats", quantity * gramsToInt(nutrition["fat"]), calc.fats(), 170, 480, '#FFCD91'));
    pies.push(piechart("Proteins", quantity * gramsToInt(nutrition["protein"]), calc.proteins(), 445, 480, '#FFA5A5'));
    pies.push(piechart("Sugars", quantity * getSugar(nutrition["nutrients"]), calc.sugars(), 995, 480, '#C8EFED'));
    pies.push(piechart("Carbohydrates", quantity * gramsToInt(nutrition["carbs"]), calc.carbs(), 720, 480, '#A8E2AD'));

    pies.forEach(pie => {
      pie.attr("opacity", state == 3 ? 1 : 0);
    });
    stats.forEach(statistic => {
      statistic.attr("opacity", state == 2 ? 1 : 0);
    });
    d3.select("#calc").style("display", state == 2 ? "block" : "none");
    svg.attr("height", heights[state]);

    d3.select("#quantityButtons").attr("opacity", 1);
  });

var go_back = d3.select("#back_button")
  .on("click", function () {
    state = prevState(state);

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

    d3.select("#search").style("display", state == 1 ? "block" : "none");
    go_back.style("display", state == 0 ? "none" : "block")

    d3.select("#start").attr("height", state == 0 ? 1450 : 0);

    if (food_image != null) {
      food_image.attr("opacity", (state == 2 || state == 3) ? 1 : 0);
    }

    d3.select("#calc").style("display", state == 2 ? "block" : "none");
    svg.attr("height", heights[state]);

    d3.select("#quantityButtons").attr("opacity", 0);
  });

var quantityButtons = svg.append("g")
  .attr("id", "quantityButtons")
  .attr("opacity", 0);
quantity_background = quantityButtons.append("rect")
  .attr("rx", 15)
  .attr("ry", 15)
  .attr('x', 600)
  .attr('y', 75)
  .attr('width', 240)
  .attr('height', 255)
  .attr('fill', '#FFFBCF');
quantity_title = quantityButtons.append("text")
  .attr("x", 660)
  .attr("y", 125)
  .attr("font-weight", 550)
  .attr("font-family", "Arial")
  .style("font-size", "30px")
  .text("Quantity");
quantity_divider = quantityButtons.append("line")
  .attr("x1", 625).attr("y1", 145)
  .attr("x2", 815).attr("y2", 145)
  .attr("stroke-width", 0.25)
  .attr("stroke", "black");
quantity_visual = quantityButtons.append("text")
  .attr("x", 720).attr("y", 230)
  .attr("font-weight", 550)
  .attr("font-family", "Arial")
  .attr("text-anchor", "middle")
  .style("font-size", "36px")
  .text(quantity);
quantityUp = quantityButtons.append("rect")
  .attr("rx", 15)
  .attr("ry", 15)
  .attr("id", "quantityUp")
  .attr("width", 60)
  .attr("height", 60)
  .attr("x", 750)
  .attr("y", 188)
  .attr("fill", "#fff");
quantityDown = quantityButtons.append("rect")
  .attr("rx", 15)
  .attr("ry", 15)
  .attr("id", "quantityDown")
  .attr("width", 60)
  .attr("height", 60)
  .attr("x", 630)
  .attr("y", 188)
  .attr("fill", "#fff");
plus_img = quantityButtons.append("svg:image")
  .attr("href", "resturaunt_pics/plus.png")
  .attr("width", 50)
  .attr("height", 50)
  .attr("x", 755)
  .attr("y", 192.5)
  .on("click", () => {
    quantity = incrementQuantity(quantity);
    quantity_visual.text(quantity);

    pies.forEach(pie => {
      pie.remove();
    });
    pies = [];
    pies.push(piechart("Calories", quantity * nutrition["calories"], calc.calories(), 720 + 275, 202.5, '#D8BAFF'));
    pies.push(piechart("Fats", quantity * gramsToInt(nutrition["fat"]), calc.fats(), 170, 480, '#FFCD91'));
    pies.push(piechart("Proteins", quantity * gramsToInt(nutrition["protein"]), calc.proteins(), 445, 480, '#FFA5A5'));
    pies.push(piechart("Sugars", quantity * getSugar(nutrition["nutrients"]), calc.sugars(), 995, 480, '#C8EFED'));
    pies.push(piechart("Carbohydrates", quantity * gramsToInt(nutrition["carbs"]), calc.carbs(), 720, 480, '#A8E2AD'));
    pies.forEach(pie => {
      pie.attr("opacity", state == 3 ? 1 : 0);
    });
  });

quantityButtons.append("svg:image")
  .attr("href", "resturaunt_pics/minus.png")
  .attr("width", 40)
  .attr("height", 40)
  .attr("x", 640)
  .attr("y", 197.5)
  .on("click", () => {
    quantity = decrementQuantity(quantity);
    quantity_visual.text(quantity);

    pies.forEach(pie => {
      pie.remove();
    });
    pies = [];
    pies.push(piechart("Calories", quantity * nutrition["calories"], calc.calories(), 720 + 275, 202.5, '#D8BAFF'));
    pies.push(piechart("Fats", quantity * gramsToInt(nutrition["fat"]), calc.fats(), 170, 480, '#FFCD91'));
    pies.push(piechart("Proteins", quantity * gramsToInt(nutrition["protein"]), calc.proteins(), 445, 480, '#FFA5A5'));
    pies.push(piechart("Sugars", quantity * getSugar(nutrition["nutrients"]), calc.sugars(), 995, 480, '#C8EFED'));
    pies.push(piechart("Carbohydrates", quantity * gramsToInt(nutrition["carbs"]), calc.carbs(), 720, 480, '#A8E2AD'));
    pies.forEach(pie => {
      pie.attr("opacity", state == 3 ? 1 : 0);
    });
  });

function gramsToInt(grams) {
  return Number(grams.substr(0, grams.length - 1));
}

function prevState(state) {
  if (state > 0) return state - 1;
  return state;
}

function nextState(state) {
  if (state < 3) return state + 1;
  return state;
}

function incrementQuantity(quantity) {
  return quantity + 1;
}

function decrementQuantity(quantity) {
  if (quantity > 1) return quantity - 1;
  else return quantity;
}

function getSugar(nutrients) {
  var amount = 0;
  nutrients.forEach(nutrient => {
    if (nutrient["name"] == "Sugar") amount = nutrient["amount"];
  })
  return amount;
}

function stat(type, food_value, cx, cy, color) {
  d3.select(`stats-${type}`).remove();
  var svg = d3.select("#visualization"),
    g = svg.append("g").attr("id", `stats-${type}`);

  background = g.append('rect')
    .attr("rx", 15)
    .attr("ry", 15)
    .attr('x', cx)
    .attr('y', cy)
    .attr('width', 240)
    .attr('height', 60)
    .attr('fill', color)
    .style('pointer-events', 'none')

  msg = g.append("text")
    .attr("x", cx + 120)
    .attr("y", cy + 30 + 11)
    .attr("text-anchor", "middle")
    .attr("font-weight", 300)
    .attr("font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif")
    .style("font-size", "22px")
    .text(type + " : " + food_value + (type == "Calories" ? "" : "g"))
    .style('pointer-events', 'none');

  return g;
}

function create_title(text, svg_name) {
  let svg = d3.select(svg_name),
    g = svg.append("g");

  title = g.append("text")
    .attr("x", 600)
    .attr("y", 30)
    .attr("dy", 0)
    .attr("text-anchor", "middle")
    .attr("font-weight", 200)
    .attr("font-family", "Impact")
    .style("font-size", "30px")
    .attr("letter-spacing", "2px")
    .text(text);

  divider = g.append("line")
    .attr("x1", 75)
    .attr("x2", 1090)
    .attr("y1", 55)
    .attr("y2", 55)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("stroke-dasharray", "8,8");

  return g;
}

function create_image(image, title, x, y, sourced, corner_case) {
  let svg = sourced ? d3.select("#start") : d3.select("#visualization"),
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
    .attr("x", x + 125)
    .attr("y", y + (sourced || corner_case ? 240 : 215))
    .attr("dy", 0)
    .attr("text-anchor", "middle")
    .attr("font-weight", 800)
    .attr("font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif")
    .style("font-size", "14px")
    .text(title).call(wrap, 200);

  return g;
}
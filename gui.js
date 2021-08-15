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

const nutrition = data["nutrition"];

  piechart("Calories", nutrition["calories"], 2000, 250, 500);
  piechart("Fats", gramsToInt(nutrition["fat"]), 75, 625, 175);
  piechart("Proteins", gramsToInt(nutrition["protein"]), 100, 625, 500);
  piechart("Sugars", nutrition["nutrients"][11]["amount"], 40, 1000, 175);
  piechart("Carbohydrates", gramsToInt(nutrition["carbs"]), 200, 1000, 500);
})

function gramsToInt(grams) {
  return Number(grams.substr(0, grams.length - 1));
}
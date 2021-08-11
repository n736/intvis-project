class Calculator {
  constructor(weight_lb, height_ft, height_in, age, sex, losing_weight, act_lvl) {
    this.weight_kg = weight_lb * 453.592 / 1000.0; //double

    this.height_cm = (height_ft * 12 + height_in) * 2.54; //double

    this.age = age; //int
    this.sex = sex; //strings "Male" or "Female"

    this.losing_weight = losing_weight; //bool
    this.act_lvl = act_lvl; // strings "None" "Light" "Moderate" "Active" "Very Active" "Extreme"
  }

  //Calculate Daily Calorie Intake (In Calories)
  calories() {
    let cals_per_day;

    if (this.sex == "male") {
      cals_per_day = 10 * this.weight_kg + 6.25 * this.height_cm - 5 * this.age + 5;
      cals_per_day = cals_per_day + 13.397 * this.weight_kg + 4.799 * this.height_cm - 5.677 * this.age + 88.362;
      cals_per_day = cals_per_day / 2;
    } else {
      cals_per_day = 10 * this.weight_kg + 6.25 * this.height_cm - 5 * this.age - 161;
      cals_per_day = cals_per_day + 9.24 * this.weight_kg + 3.098 * this.height_cm - 4.330 * this.age + 447.593;
      cals_per_day = cals_per_day / 2;
    }

    if( this.act_lvl == "None" ) {
      cals_per_day = cals_per_day * 1.2;
    } else if( this.act_lvl == "Light" ) {
      cals_per_day = cals_per_day * 1.35
    } else if( this.act_lvl == "Moderate" ) {
      cals_per_day = cals_per_day * 1.45;
    } else if( this.act_lvl == "Active") {
      cals_per_day = cals_per_day * 1.53;
    } else if( this.act_lvl == "Very Active" ) {
      cals_per_day = cals_per_day * 1.7;
    } else {
      cals_per_day = cals_per_day * 1.9;
    }

    if (this.losing_weight) {
      cals_per_day = cals_per_day * 0.8;
    }

    return cals_per_day;
  }

  //Calculate Daily Fat Intake (In Grams)
  fats() {
    let cals_of_fat, fat_per_day;

    if (this.age <= 3) {
      cals_of_fat = this.calories() * 0.35;
    } else if (4 <= this.age && this.age <= 18) {
      cals_of_fat = this.calories() * 0.3;
    } else if (19 <= this.age) {
      cals_of_fat = this.calories() * 0.275
    }

    //Convert cals to grams
    fat_per_day = cals_of_fat / 9;

    return fat_per_day;
  }

  //Calculate Carbs Per Day (In Grams)
  carbs() {
    let cals_of_carbs, carbs_per_day;

    if (this.losing_weight) {
      cals_of_carbs = this.calories() * 0.525;
    } else {
      cals_of_carbs = this.calories() * 0.55;
    }

    //Convert cals to grams
    carbs_per_day = cals_of_carbs / 4;

    return carbs_per_day;
  }

  //Calculate Proteins Per Day (In Grams)
  proteins() {
    let protein_per_day;

    if (this.act_lvl == "None") {
      protein_per_day = 0.8 * this.weight_kg;
    } else if (this.act_lvl == "Light") {
      protein_per_day = 1.13 * this.weight_kg;
    } else if (this.act_lvl == "Active") {
      protein_per_day = 1.46 * this.weight_kg;
    } else {
      protein_per_day = 1.8 * this.weight_kg;
    }

    return protein_per_day;
  }

  //Calculate Sugar Per Day (In Grams)
  sugars() {
    let sugar_per_day;

    if (this.sex == "male") {
      sugar_per_day = 37.5;
    } else {
      sugar_per_day = 25;
    }

    return sugar_per_day;
  }
}

const calc = new Calculator(130, 5, 4, 19, "male", false, "None");
console.log(calc.calories());
console.log(calc.carbs());
console.log(calc.fats());
console.log(calc.proteins());
console.log(calc.sugars());
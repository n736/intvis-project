class Calculator {
  constructor(weight_lb, height_ft, height_in, age, sex, losing_weight, act_lvl) {
    this.weight_g = weight_lb * 453.592; //double
    this.weight_kg = weight_g / 1000; //double

    this.height_cm = (height_ft * 12 + height_in) * 2.54; //double

    this.age = age; //int
    this.sex = sex; //strings "Male" or "Female"

    this.losing_weight = losing_weight; //bool
    this.act_lvl = act_lvl; // strings "None" "Some Days" "Most Days" "Every Day"
  }

  //Calculate Daily Calorie Intake (In Calories)
  calorie() {
    let cals_per_day;

    if (sex == "male") {
      cals_per_day = 10 * weight_g + 6.25 * height_cm - 5 * age + 5;
    } else {
      cals_per_day = 10 * weight_g + 6.25 * height_cm - 5 * age - 161;
    }

    if (losing_weight) {
      cals_per_day = cals_per_day * 0.8;
    }

    return cals_per_day;
  }

  //Calculate Daily Fat Intake (In Grams)
  fat() {
    let cals_of_fat, fat_per_day;

    if (age <= 3) {
      cals_of_fat = this.calorie() * 0.35;
    } else if (4 <= age && age <= 18) {
      cals_of_fat = this.calorie() * 0.3;
    } else if (19 <= age) {
      cals_of_fat = this.calorie() * 0.275
    }

    //Convert cals to grams
    fat_per_day = cals_of_fat / 9;

    return fat_per_day;
  }

  //Calculate Carbs Per Day (In Grams)
  carbs() {
    let cals_of_carbs, carbs_per_day;

    if (this.losing_weight) {
      cals_of_carbs = this.calorie() * 0.525;
    } else {
      cals_of_carbs = this.calorie() * 0.55;
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
    } else if (this.act_lvl == "Some Days") {
      protein_per_day = 1.13 * this.weight_kg;
    } else if (this.act_lvl == "Most Days") {
      protein_per_day = 1.46 * this.weight_kg;
    } else {
      protein_per_day = 1.8 * this.weight_kg;
    }

    return protein_per_day;
  }

  //Calculate Sugar Per Day (In Grams)
  sugars() {
    let sugar_per_day;

    if (male) {
      sugar_per_day = 37.5;
    } else {
      sugar_per_day = 25;
    }

    return sugar_per_day;
  }
}
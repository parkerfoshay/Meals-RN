import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({
  navigation: { navigate, goBack, getParam }
}) => {
  const catId = getParam("categoryId");

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList displayMeals={displayMeals} navigation={navigate} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;

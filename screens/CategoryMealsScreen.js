import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItemTile from "../components/MealItemTile";

const CategoryMealsScreen = ({
  navigation: { navigate, goBack, getParam }
}) => {
  const renderMealItem = itemData => {
    return (
      <MealItemTile
        title={itemData.item.title}
        id={itemData.item.id}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        navigation={navigate}
      />
    );
  };
  const catId = getParam("categoryId");

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;

import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = ({ navigation: { navigate } }) => {
  const displayMeals = MEALS.filter(meal => meal.id === "m1");

  return <MealList displayMeals={displayMeals} navigation={navigate} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;

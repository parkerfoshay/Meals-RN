import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import MealItemTile from "./MealItemTile";

const MealList = ({ displayMeals, navigation }) => {
    const renderMealItem = itemData => {
        return (
          <MealItemTile
            title={itemData.item.title}
            id={itemData.item.id}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            navigation={navigation}
          />
        );
      };
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;

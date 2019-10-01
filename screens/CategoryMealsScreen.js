import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealsScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.screen}>
      <Text> category meals screen</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          navigate({ routeName: "MealDetail" });
        }}
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

export default CategoryMealsScreen;

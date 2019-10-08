import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GridItem = ({ items, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        navigation({
          routeName: "CategoryMeals",
          params: {
            categoryId: items.item.id
          }
        });
      }}
    >
      <View>
        <Text>{items.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default GridItem;

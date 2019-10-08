import React from "react";
import { StyleSheet, FlatList } from "react-native";

import GridItem from "../components/GridItem";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation: { navigate } }) => {
    const renderGridItem = itemData => {
        return <GridItem items={itemData} navigation={navigate}/>;
      };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
     
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;

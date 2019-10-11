import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import GridItem from "../components/GridItem";
import HeaderButton from "../components/HeaderButton";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation: { navigate } }) => {
  const renderGridItem = itemData => {
    return (
      <GridItem
        items={itemData}
        navigation={navigate}
        color={itemData.item.color}
      />
    );
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

CategoriesScreen.navigationOptions = navData => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;

import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const FilterScreen = () => {
    return (
        <View style={styles.screen}>
            <Text> filter screen</Text>
        </View>
    )
}

FilterScreen.navigationOptions = navData => {
    return {
      headerTitle: "Filters",
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
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FilterScreen

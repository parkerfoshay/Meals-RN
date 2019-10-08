import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailScreen = ({ navigation: { popToTop } }) => {
  return (
    <View style={styles.screen}>
      <Text> meal details screen</Text>
      <Button
        title="Go BackTo the beginning "
        onPress={() => {
          popToTop();
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

export default MealDetailScreen;

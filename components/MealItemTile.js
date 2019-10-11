import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground
} from "react-native";

import DefaultText from './DefaultText';

const MealItemTile = ({
  title,
  duration,
  complexity,
  affordability,
  image,
  id,
  navigation
}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableComponent
        onPress={() => {
          navigation({
            routeName: "MealDetail",
            params: {
              mealId: id
            }
          });
        }}
      >
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  }
});

export default MealItemTile;

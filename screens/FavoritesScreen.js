import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/mealsList/MealsList";
import { FavoritesContext } from "../store/context/favourites-contex";
import { MEALS } from "../data/DummyData";

const FavoritesScreen = () => {
  const FavoriteMealsContext = useContext(FavoritesContext);

  const favoritesMeals = MEALS.filter((meal) =>
    FavoriteMealsContext.ids.includes(meal.id)
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#005A04",
  },
});

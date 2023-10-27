import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/DummyData";
import MealsList from "../components/mealsList/MealsList";

const MealsDetailsScreen = ({ route, navigation }) => {
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsDetailsScreen;

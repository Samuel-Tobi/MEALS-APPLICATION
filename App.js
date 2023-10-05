import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import CategoriesScreen from "./screens/CategoriesScreen";

import { createStackNavigator } from "@react-navigation/stack";
import MealDescriptionScreen from "./screens/MealDescriptionScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#005A04" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#CCFFBB" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealsDetailsScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryID;
            //   return { title: catId };
            // }}
          />
          <Stack.Screen
            name="MealDescription"
            component={MealDescriptionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

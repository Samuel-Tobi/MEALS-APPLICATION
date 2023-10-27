import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealDescriptionScreen from "./screens/MealDescriptionScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
// import FavoritesContextProvider from "./store/context/favourites-contex";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#005A04" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#CCFFBB" },
        drawerContentStyle: { backgroundColor: "#005A04" },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#005A04",
        drawerActiveBackgroundColor: "#CCFFBB",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
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
              component={DrawerNavigator}
              // component={CategoriesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
            <Stack.Screen
              name="MealDescription"
              component={MealDescriptionScreen}
              options={{ title: "About the Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
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

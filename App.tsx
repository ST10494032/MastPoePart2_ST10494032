import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import { MenuItem } from "./types/MenuItem";

export type RootStackParamList = {
  Home: { menuItems: MenuItem[] } | undefined;
  AddItem: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Chef Christoffel’s Menu", headerStyle: { backgroundColor: "#B8860B" }, headerTintColor: "#fff" }}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{ title: "Add New Dish", headerStyle: { backgroundColor: "#B8860B" }, headerTintColor: "#fff" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Discover from "../screens/Discover";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

export default ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route?.state?.routeNames[route.state.index] || "Movies",
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") iconName += "film";
          else if (route.name === "TV") iconName += "tv";
          else if (route.name === "Search") iconName += "search";
          else if (route.name === "Discover") iconName += "heart";
          return (
            <Ionicons
              name={iconName}
              color={focused ? "#fff" : "#555"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#000",
          borderTopColor: "#000",
        },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discover" component={Discover} />
    </Tabs.Navigator>
  );
};

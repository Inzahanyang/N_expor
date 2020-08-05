import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useLayoutEffect } from "react";
import { Platform } from "react-native";
import Discover from "../screens/Discover";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";

const Tabs = createBottomTabNavigator();

const getHeaderName = route => route?.state?.routeNames[route.state.index] || "Movies";

export default ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route),
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          switch (route.name) {
            case "Movies":
              iconName += "film";
              break;
            case "TV":
              iconName += "tv";
              break;
            case "Search":
              iconName += "search";
              break;
            case "Discover":
              iconName += "heart";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} color={focused ? "#fff" : "#555"} size={26} />;
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

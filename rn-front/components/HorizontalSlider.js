import React from "react";
import { ScrollView, View } from "react-native";
import Title from "./Title";

export default ({ title, children }) => (
  <View>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 10, marginBottom: 30 }}
      contentContainerStyle={{ paddingLeft: 10 }}
      horizontal
    >
      {children}
    </ScrollView>
  </View>
);

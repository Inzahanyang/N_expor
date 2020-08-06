import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
const Text = styled.Text`
  font-weight: bold;
  margin-left: 10px;
  color: #fff;
`;

export default ({ onPress, text, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <FontAwesome name={icon} color="white" size={24} />
      <Text>{text}</Text>
    </Container>
  </TouchableOpacity>
);

import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export default ({ title }) => <Text>{title}</Text>;

import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Container>
    <MapView style={{ width: "100%", height: "100%" }} />
  </Container>
);

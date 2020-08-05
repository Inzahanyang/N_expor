import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: "rgb(231,191,50)";
  justify-content: flex-end;
`;
const Title = styled.Text`
  font-size: 33px;
  padding: 30px;
  margin-bottom: 100px;
`;

export default () => (
  <Container>
    <Title>Getting some Weather</Title>
  </Container>
);

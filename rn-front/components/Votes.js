import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
  color: rgb(220, 220, 200);
  font-size: 12px;
  font-weight: 500;
`;

export default ({ votes }) => <Container>⭐️{votes} / 10</Container>;

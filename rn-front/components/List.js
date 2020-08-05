import React from "react";
import Title from "./Title";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 20px;
`;

export default ({ title, children }) => (
  <>
    <Title title={title} />
    <Container>{children}</Container>
  </>
);

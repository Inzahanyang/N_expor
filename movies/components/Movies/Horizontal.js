import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const Container = styled.View``;
const Content = styled.View`
  padding: 12px;
  flex-direction: row;
`;
const Poster = styled.Image`
  width: 100px;
  height: 160px;
`;
const Data = styled.View`
  margin-left: 12px;
  width: 66%;
`;
const Title = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;
const Release = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  opacity: 0.8;
`;
const Overview = styled.Text`
  color: #fff;
`;

export default ({ id, poster_path, title, overview, release_date }) => {
  return (
    <Container>
      <Content>
        <Poster source={{ uri: apiImage(poster_path) }} />
        <Data>
          <Title>{title.slice(0, 30)}</Title>
          <Release>{release_date}</Release>
          <Overview>{overview.slice(0, 140)}</Overview>
        </Data>
      </Content>
    </Container>
  );
};

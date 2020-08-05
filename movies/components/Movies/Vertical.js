import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const Container = styled.View`
  margin-bottom: 10px;
`;
const Content = styled.View`
  margin-left: 13px;
`;
const Poster = styled.Image`
  width: 100px;
  height: 160px;
  margin-bottom: 5px;
  border-radius: 80px;
`;
const Data = styled.View`
  align-items: center;
`;
const Title = styled.Text`
  color: #fff;
  margin-bottom: 3px;
`;
const Votes = styled.Text`
  color: #fff;
  font-size: 10px;
`;

export default ({ poster_path, title, vote_average }) => {
  return (
    <Container>
      <Content>
        <Poster source={{ uri: apiImage(poster_path) }} />
        <Data>
          <Title>{title.slice(0, 14)}</Title>
          <Votes>⭐️ {vote_average} / 10</Votes>
        </Data>
      </Content>
    </Container>
  );
};

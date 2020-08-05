import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;
const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Poster = styled.Image`
  width: 100px;
  height: 150px;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Votes = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Overview = styled.Text`
  color: #fff;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.View`
  background-color: #e74c3c;
  border-radius: 3px;
  padding: 5px 7px;
`;
const ButtonTitle = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export default ({ id, backdrop_path, poster_path, title, vote_average, overview }) => {
  return (
    <Container>
      <BG source={{ uri: apiImage(backdrop_path) }} />
      <Content>
        <Poster source={{ uri: apiImage(poster_path) }} />
        <Data>
          <Title>{title.slice(0, 10)}</Title>
          <Votes>⭐️ {vote_average} / 10</Votes>
          <Overview>{overview.slice(0, 79)}</Overview>
          <TouchableOpacity>
            <ButtonContainer>
              <ButtonTitle>View Details</ButtonTitle>
            </ButtonContainer>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

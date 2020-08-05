import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import { trimText } from "../../utils";
import Poster from "../Poster";
import Votes from "../Votes";

const Container = styled.View`
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
  align-items: center;
  justify-content: space-around;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  margin-bottom: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  color: #fff;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 7px 10px;
  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: #fff;
`;

const VotesContainer = styled.View`
  margin-bottom: 7px;
`;

export default ({ id, title, overview, votes, backgroundImage, poster }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      overview,
      votes,
      backgroundImage,
      poster,
    });
  };
  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 20)}</Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{trimText(overview, 90)}</Overview>
          <TouchableOpacity onPress={goToDetail}>
            <Button>
              <ButtonText>View details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

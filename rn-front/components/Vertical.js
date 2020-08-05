import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { trimText } from "../utils";
import Poster from "./Poster";
import Votes from "./Votes";

const Container = styled.View`
  align-items: center;
  margin-right: 15px;
`;
const Title = styled.Text`
  color: #fff;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

export default ({ isTv = false, id, poster, title, votes, overview, backgroundImage }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      poster,
      title,
      votes,
      overview,
      backgroundImage,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  );
};

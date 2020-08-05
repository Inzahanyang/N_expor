import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { formatData, trimText } from "../utils";
import Poster from "./Poster";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;
const Data = styled.View`
  align-items: flex-start;
  width: 65%;
  margin-left: 25px;
`;
const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 12px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  opacity: 0.8;
  color: #fff;
`;

export default ({ isTv = false, id, title, releaseData, poster, overview, backgroundImage }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      releaseData,
      poster,
      overview,
      backgroundImage,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 25)}</Title>
          {releaseData ? <ReleaseDate>{formatData(releaseData)}</ReleaseDate> : null}
          <Overview>{trimText(overview, 80)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

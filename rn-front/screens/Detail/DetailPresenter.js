import React from "react";
import { Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";
import { formatData } from "../../utils";

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.4;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 40px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0 30px;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: #fff;
  opacity: 0.8;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DataValue = styled.Text`
  color: #fff;
  opacity: 0.8;
`;

export default ({ result, loading }) => {
  return (
    <ScrollContainer loading={false} contentContainerStyle={{ paddingBottom: 80 }}>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes && <Votes votes={result.votes} />}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview && (
          <>
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        )}
        {loading && <ActivityIndicator color={"white"} />}
        {result.spoken_languages && (
          <>
            <DataName>Languages</DataName>
            <DataValue>{result.spoken_languages.map(l => `${l.name} `)}</DataValue>
          </>
        )}
        {result.release_date && (
          <>
            <DataName>Release Date</DataName>
            <DataValue>{formatData(result.release_date)}</DataValue>
          </>
        )}
        {result.status && (
          <>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        )}
        {result.runtime && (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} mins</DataValue>
          </>
        )}
        {result.first_air_date && (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{formatData(result.first_air_date)}</DataValue>
          </>
        )}
        {result.genres && (
          <>
            <DataName>Genres</DataName>
            <DataValue>
              {result.genres.map((l, index) => (index + 1 === result.genres.length ? l.name : `${l.name}, `))}
            </DataValue>
          </>
        )}
        {result.number_of_seasons && (
          <>
            <DataName>Seasons / Episodes</DataName>
            <DataValue>
              {result.number_of_seasons} / {result.number_of_episodes}
            </DataValue>
          </>
        )}
      </Data>
    </ScrollContainer>
  );
};

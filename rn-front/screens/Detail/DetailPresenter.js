import React from "react";
import { Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";
import { formatData } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import Link from "../../components/Detail/Link";

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

export default ({ result, loading, openBrowser }) => {
  return (
    <ScrollContainer loading={false} contentContainerStyle={{ paddingBottom: 80 }}>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes ? <Votes votes={result.votes} /> : null}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview ? (
          <>
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        ) : null}
        {loading && <ActivityIndicator color={"white"} />}
        {result.spoken_languages ? (
          <>
            <DataName>Languages</DataName>
            <DataValue>{result.spoken_languages.map(l => `${l.name} `)}</DataValue>
          </>
        ) : null}
        {result.release_date ? (
          <>
            <DataName>Release Date</DataName>
            <DataValue>{formatData(result.release_date)}</DataValue>
          </>
        ) : null}
        {result.status ? (
          <>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        ) : null}
        {result.runtime ? (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} mins</DataValue>
          </>
        ) : null}
        {result.first_air_date ? (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{formatData(result.first_air_date)}</DataValue>
          </>
        ) : null}
        {result.genres ? (
          <>
            <DataName>Genres</DataName>
            <DataValue>
              {result.genres.map((l, index) => (index + 1 === result.genres.length ? l.name : `${l.name}, `))}
            </DataValue>
          </>
        ) : null}
        {result.number_of_seasons ? (
          <>
            <DataName>Seasons / Episodes</DataName>
            <DataValue>
              {result.number_of_seasons} / {result.number_of_episodes}
            </DataValue>
          </>
        ) : null}
        {result.imdb_id ? (
          <Link
            onPress={() => openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)}
            text={"IMDB Page"}
            icon="imdb"
          />
        ) : null}
        {result.videos.results.length > 0 ? (
          <>
            <DataName>Videos</DataName>
            {result.videos.results.map(video => (
              <Link
                text={video.name}
                key={video.id}
                icon="youtube-play"
                onPress={() => openBrowser(`https://www.youtube.com/watch?v=${video.key}`)}
              />
            ))}
          </>
        ) : null}
      </Data>
    </ScrollContainer>
  );
};

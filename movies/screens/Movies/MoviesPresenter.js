import React, { useState } from "react";
import { ActivityIndicator, Dimensions, RefreshControl, ScrollView } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Horizontal from "../../components/Movies/Horizontal";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Movies/Vertical";

const { width, height } = Dimensions.get("window");

const TopContainer = styled.View`
  width: 100%;
  height: ${height / 3}px;
  margin-bottom: 15px;
`;
const MiddleContainer = styled.View``;
const BottomContainer = styled.View``;

const SectionTitle = styled.Text`
  padding: 6px 12px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

export default ({ loading, nowPlaying, popular, upcoming, refreshFn }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} tintColor={"white"} />}
      style={{ backgroundColor: "#000" }}
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <TopContainer>
            <SectionTitle>Now Playing</SectionTitle>
            <Swiper controlsEnabled={false} loop timeout={3}>
              {nowPlaying.map(movie => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  backdrop_path={movie.backdrop_path}
                  poster_path={movie.poster_path}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  overview={movie.overview}
                />
              ))}
            </Swiper>
          </TopContainer>
          <MiddleContainer>
            <SectionTitle>Popular</SectionTitle>
            <ScrollView horizontal>
              {popular.map(movie => (
                <Vertical
                  key={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                  vote_average={movie.vote_average}
                />
              ))}
            </ScrollView>
          </MiddleContainer>
          <BottomContainer>
            <SectionTitle>Coming Up</SectionTitle>
            {upcoming.map(movie => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </BottomContainer>
        </>
      )}
    </ScrollView>
  );
};

import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Slider from "../../components/movies/Slider";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View``;

const SlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
`;

export default ({ loading, nowPlaying, popular, upcoming, refreshFn }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <>
      <SlideContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map(movie => (
            <Slider
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              votes={movie.vote_average}
              overview={movie.overview}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
            />
          ))}
        </Swiper>
      </SlideContainer>

      <Container>
        <HorizontalSlider title="Popular Movies">
          {popular.map(movie => (
            <Vertical
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
              overview={movie.overview}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </HorizontalSlider>
        <List title="Coming Soon">
          {upcoming.map(movie => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseData={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);

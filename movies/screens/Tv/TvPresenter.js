import React, { useState } from "react";
import { ActivityIndicator, Dimensions, RefreshControl, ScrollView } from "react-native";
import styled from "styled-components/native";
import Horizontal from "../../components/Movies/Horizontal";
import Vertical from "../../components/Movies/Vertical";

const { width, height } = Dimensions.get("window");

const TopContainer = styled.View``;
const MiddleContainer = styled.View``;
const BottomContainer = styled.View``;

const SectionTitle = styled.Text`
  padding: 6px 12px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

export default ({ loading, today, topRated, popular, thisWeek, refreshFn }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} enabled={false} tintColor={"white"} />
      }
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
            <SectionTitle>Today</SectionTitle>
            <ScrollView horizontal>
              {today.map(show => (
                <Vertical
                  key={show.id}
                  poster_path={show.poster_path}
                  title={show.name}
                  vote_average={show.vote_average}
                />
              ))}
            </ScrollView>
          </TopContainer>
          <MiddleContainer>
            <SectionTitle>Top Rated</SectionTitle>
            <ScrollView horizontal>
              {topRated.map(show => (
                <Vertical
                  key={show.id}
                  poster_path={show.poster_path}
                  title={show.name}
                  vote_average={show.vote_average}
                />
              ))}
            </ScrollView>
          </MiddleContainer>
          <BottomContainer>
            <SectionTitle>This Week</SectionTitle>
            {topRated.map(show => (
              <Horizontal
                key={show.id}
                poster_path={show.poster_path}
                title={show.name}
                release_date={show.first_air_date}
                overview={show.overview}
              />
            ))}
          </BottomContainer>
        </>
      )}
    </ScrollView>
  );
};

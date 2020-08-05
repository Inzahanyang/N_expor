import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Vertical from "../../components/Movies/Vertical";

const Container = styled.View`
  flex: 1;
  background-color: #000;
`;
const Input = styled.TextInput`
  margin: 0 20px 50px;
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 18px;
`;

const SectionTitle = styled.Text`
  padding: 6px 12px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;
export default ({ value, onChange, onSubmit, movies, shows }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <Input
        value={value}
        onChangeText={onChange}
        placeholder={"Write some keyword"}
        onSubmitEditing={onSubmit}
        returnKeyType={"search"}
      />
      {movies.length !== 0 && (
        <>
          <SectionTitle>Top Rated</SectionTitle>
          <ScrollView horizontal>
            {movies.map(show => (
              <Vertical
                key={show.id}
                poster_path={show.poster_path}
                title={show.title}
                vote_average={show.vote_average}
              />
            ))}
          </ScrollView>
        </>
      )}
      {shows.length !== 0 && (
        <>
          <SectionTitle>Top Rated</SectionTitle>
          <ScrollView horizontal>
            {shows.map(show => (
              <Vertical
                key={show.id}
                poster_path={show.poster_path}
                title={show.name}
                vote_average={show.vote_average}
              />
            ))}
          </ScrollView>
        </>
      )}
    </ScrollView>
  );
};

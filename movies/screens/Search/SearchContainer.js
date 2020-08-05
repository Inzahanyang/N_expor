import React, { useState } from "react";
import styled from "styled-components/native";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const Container = styled.View`
  flex: 1;
  background-color: #000;
`;
const Input = styled.TextInput`
  background-color: #fff;
`;

export default () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });

  const onChange = text => setKeyword(text);

  const search = async () => {
    if (keyword === "") {
      alert("hello?");
      return;
    }
    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      moviesError,
      showsError,
    });
  };

  return <SearchPresenter value={keyword} onChange={onChange} onSubmit={search} {...results} />;
};

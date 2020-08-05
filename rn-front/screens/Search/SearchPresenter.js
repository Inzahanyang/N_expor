import React from "react";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Input from "../../components/search/Input";
import Vertical from "../../components/Vertical";

export default ({ value, onChange, onSubmit, movies, shows }) => {
  return (
    <ScrollContainer refreshFn={onSubmit} loading={false} contentContainerStyle={{ paddingTop: 10 }}>
      <Input value={value} onChange={onChange} onSubmit={onSubmit} placeholder={"Write a keyword"} />
      {movies.length !== 0 && (
        <HorizontalSlider title={"Movie Results"}>
          {movies.map(movie => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
      {shows.length !== 0 && (
        <HorizontalSlider title={"Tv Results"}>
          {shows.map(show => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
    </ScrollContainer>
  );
};

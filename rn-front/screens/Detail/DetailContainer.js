import React, { useLayoutEffect, useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import * as WebBrowser from "expo-web-browser";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      backgroundImage,
      poster,
      votes,
      overview,
      videos: { results: [] },
    },
  });

  const openBrowser = async url => {
    await WebBrowser.openBrowserAsync(url);
  };

  const getData = async () => {
    const [getDetail, getDetailError] = isTv ? await tvApi.show(id) : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average,
      },
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  useLayoutEffect(() => navigation.setOptions({ title }));

  return <DetailPresenter openBrowser={openBrowser} {...detail} />;
};

import React from "react";
import { useState, useEffect } from "react";
import axios from "../../Api/Request/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styled from "styled-components";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLarge }) => {
  const [Movies, SetMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      SetMovies(request.data.results);
    }
    fetchData();
  }, [fetchURL]);

  return (
    <Container className="row__wrapper">
      <h1>{title}</h1>
      <div className="row__container">
        {Movies.map(({ id, name, poster_path, backdrop_path }) => (
          <LazyLoadImage
            effect="blur"
            key={id}
            className={isLarge ? "row__poster isLarge" : "row__poster"}
            src={`${base_url}${isLarge ? poster_path : backdrop_path}`}
            alt={name}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  margin-left: 20px;
  margin-top: 15px;
  .row__container {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    cursor: pointer;
    .isLarge {
      max-height: 250px;
    }
    &::-webkit-scrollbar{
      display: none;
    }
  }
  .row__poster {
    object-fit: contain;
    max-height: 100px;
    margin-right: 10px;
    transition: transform 0.45s !important;

    &:hover {
      transform: scale(1.08);
    }
  }
`;
export default Row;

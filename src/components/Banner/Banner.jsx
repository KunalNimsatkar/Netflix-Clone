import { useState, useEffect } from "react";
import axios from "../../Api/Request/axios";
import requests from "../../Api/Request/request";
import styled from "styled-components";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <Container
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1>{movie.name || movie.original_name}</h1>
        <div className="button">
          <button>play</button>
          <button>my list</button>
        </div>
        <div className="banner__description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>
      <div className="banner__footer"></div>
    </Container>
  );
};

const Container = styled.div`
  object-fit: contain;
  height: 448px;
  color: white;
  .banner__content {
    margin-left: 30px;
    height: 190px;
    padding-top: 140px;
    h1 {
      line-height: 60px;
      margin-bottom: 10px;
      font-size: 3rem;
    }
    .button button {
      cursor: pointer;
      color: #fff;
      outline: none;
      border: none;
      font-weight: 700;
      border-radius: 0.2vw;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
      background-color: rgba(51, 51, 51, 0.5);
      padding: 0.5rem 2rem;
      text-transform: capitalize;
      &:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
      }
    }
    .banner__description {
      line-height: 1.3;
      padding-top: 1rem;
      font-size: 1rem;
      max-width: 460px;
      height: 80px;
    }
  }
  .banner__footer {
    height: 16.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
  }
`;
export default Banner;

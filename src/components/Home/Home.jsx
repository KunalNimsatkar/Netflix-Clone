import React from 'react';
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import request from "../../Api/Request/request";
import Row from "../Row/Row";

const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      <Row
        title="Netflix Original"
        fetchURL={request.fetchNetflixOriginal}
        isLarge
      />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentary" fetchURL={request.fetchDocumentaries} />
    </main>
  )
}

export default Home
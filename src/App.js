import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from "./Nav";

function App() {
  return (
    <div className="app">  
      <Nav />
      <Banner />
      <Row 
        title='Trending' 
        fetchUrl={requests.fetchTrending} 
        isLargeRow
      /> 
      <Row title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='TopRated' fetchUrl={requests.fetchTopRated} />
      <Row title='ActionMovies' fetchUrl={requests.fetchActionMovies} />
      <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='RomanceMovies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='HorrorMovies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
 


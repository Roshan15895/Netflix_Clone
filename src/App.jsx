
import './App.css';
import ROW from './ROW';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  

  return (
    <div className='App'>
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      
      <ROW title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow = {true} />
      <ROW title="Trending Now" fetchUrl={requests.fetchTrending} />
      <ROW title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <ROW title="Action Movies" fetchUrl={requests.fetchHorrorMovies} />
      <ROW title="Comedy Movies" fetchUrl={requests.fetchActionMovies} />
      <ROW title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <ROW title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <ROW title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      
    </div>
  )
  
}

export default App;

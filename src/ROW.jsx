import { useEffect } from "react";
import { useState } from "react";
import axios from "./axios";
import "./ROW.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function ROW({ title, fetchUrl, isLargeRow}) {
  const [Movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");


  useEffect(() => {

    async function fetchData(){

      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

  },[fetchUrl]);

  // console.table(Movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || "").then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {Movies.map(movie => (
            <img
            key={movie.id} 
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          ))}

        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}  />}
        
    </div>
  )
}

export default ROW;
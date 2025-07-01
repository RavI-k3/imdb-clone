import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddtoWatchList,
  handleRemoveFromWatchlist,
  watchlist,
  fullPosterUrl
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const handlePREV = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNEXT = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=582f76297d4f4bb6200296e4d96ebd99&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <>
    <div className="text-center font-bold  text-2xl m-3">
        Trending Movies
        
        <Pagination
          pageNo={pageNo}
          handelPREV={handlePREV}
          handleNEXT={handleNEXT}
        />
        <div className="flex flex-row flex-wrap justify-around gap-4">
          {movies.map((movieObj) => {
            return (
              <Moviecard
                movieObj={movieObj}
                key={movieObj.id}
                poster_path={movieObj.poster_path}
                name={movieObj.original_title}
                handleAddtoWatchList={handleAddtoWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                watchlist={watchlist}
              />
            );
          })}
        </div>
        <Pagination
          pageNo={pageNo}
          handelPREV={handlePREV}
          handleNEXT={handleNEXT}
        />
      </div>
    </>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=582f76297d4f4bb6200296e4d96ebd99&language=en-US&page=2

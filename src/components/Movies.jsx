import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./pagination";

function Movies({
  handleAddtoWatchList,
  handleRemoveFromWatchlist,
  watchlist,
  fullPosterUrl
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  //const [search, setState] = useState();

 // let handleSearch = (e) => {
   // setState(e.target.value);
   // return  <div  className= 'h-[45vh] w-[175px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end m=3 shadow-md' 
   // style={{backgroundImage:  `url(${fullPosterUrl})`,}}></div>
 // };

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
       {/*} <div className="flex justify-center my-5">
          <input
            type="text"
            onChange={handleSearch}
            value={search}
            placeholder="Search Movies"
            className="px-4 bg-gray-200 h-[2rem] w-[18rem] outline-none rounded-xl"
          />
        </div>*/}
        
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

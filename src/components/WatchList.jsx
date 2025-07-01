import React, { useEffect, useState } from "react";

import genreids from "../utilities/genreid";

function WatchList({ watchlist, setWatchList ,handleRemoveFromWatchlist}) {
  const [search, setState] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [Currgenre, setCurrgenre] = useState("All Genres");

  let handleSearch = (e) => {
    setState(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrgenre(genre);
  };

  let sortmax = () => {
    let sortedmax = [...watchlist].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setWatchList(sortedmax);
  };

  let sortmin = () => {
    let sortedmin = [...watchlist].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setWatchList(sortedmin);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 ">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => {
                handleFilter(genre);
              }}
              className={
                Currgenre == genre
                  ? "flex justify-center items-center bg-gray-900/60 rounded-xl  text-white font-bold h-[3rem] w-[9rem] mx-4"
                  : "flex justify-center items-center bg-blue-400 rounded-xl  text-white font-bold h-[3rem] w-[9rem] mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-5">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          placeholder="Searc Movies"
          className="px-4 bg-gray-200 h-[2rem] w-[18rem] outline-none rounded-xl"
        />
      </div>

      <div className="rounded-lg border border-gray-200 m-8 overflow-hidden">
        <table className="w-full text-center text-gray-600">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className="flex p-2 justify-center">
                <div onClick={sortmax} className="p-2">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">ratings</div>
                <div onClick={sortmin} className="p-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (Currgenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == Currgenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj, index) => {
                return (
                  <tr key={index} className="border-b-2">
                    <td className="flex item-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        alt="Movie Poster"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10"> {movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td  onClick={()=>{handleRemoveFromWatchlist(movieObj)}} className="text-red-800 rounded-xl  text-white font-bold  bg-red-400 h-[10px] w-[75px] mx-4">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;

//<div className='flex justify-center my-4'>
//    <input type='text' placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-400'>   </input>
//</div>

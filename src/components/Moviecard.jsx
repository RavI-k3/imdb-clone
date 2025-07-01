import React from 'react'
import WatchList from './WatchList';

function Moviecard({  movieObj,poster_path,name , handleAddtoWatchList, handleRemoveFromWatchlist , watchlist }) {

  const fullPosterUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  function doesContain(movieObj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id ==movieObj.id){
        return true
      }
    }
    return false
  }
  return (
    <div  className= 'h-[45vh] w-[175px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end m=3 shadow-md' 
    style={{backgroundImage:  `url(${fullPosterUrl})`,}}>

      {doesContain(movieObj)?(
        <div onClick={()=>handleRemoveFromWatchlist(movieObj)}  className='flex justify-center items-center rounded-lg bg-gray-900/60 '>&#10060;</div>
      ):( <div onClick={()=>handleAddtoWatchList(movieObj)} className='flex justify-center items-center rounded-lg bg-gray-900/60 '>
             &#128525;
      </div>
           )}
      <div className='text-white text-sm w-full text-center normal-case font-serif p-2 bg-gray-900/70 rounded-xl'>
        {name}
      </div>
    </div>
  )
}

export default Moviecard
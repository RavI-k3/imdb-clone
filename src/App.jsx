import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import WatchList from "./components/WatchList";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [count, setCount] = useState(0);

  let [watchlist, setWatchList] = useState([])

  let handleAddtoWatchList =(movieObj)=>{
    let newWatchList =[...watchlist , movieObj];
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRemoveFromWatchlist = (movieObj)=>{
    let filteredWatchLsit = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWatchList(filteredWatchLsit)
    localStorage.setItem('moviesApp' , JSON.stringify(filteredWatchLsit))
    console.log(filteredWatchLsit)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
   },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <Banner/> <Movies  watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList}  handleRemoveFromWatchlist={handleRemoveFromWatchlist} /></>} />
          <Route path="/WatchList" element={<WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

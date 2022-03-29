import { useEffect, useState } from 'react'
import './assets/styles/App.css'
import Footer from './components/Footer'
import { GlobalDatas } from './components/GlobalContext'
import Home from './components/Home'

function App() {
  // const [data, setData] = useState(null)
  // const API_KEY = 'api_key=06ae2dc755080f5934364ba0fb9232fb'
  // const BASE_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${API_KEY}`
  // const URL_IMG = `https://image.tmdb.org/t/p/w500`

  // useEffect(() => {
  //   async function getMovies(){
  //     const response = await fetch(BASE_URL)
  //     const json = await response.json()
  //     setData(json)
  //   }
  //   getMovies()
  // }, [])


  return (
    <GlobalDatas>
      <Home />
      <Footer />
    </GlobalDatas>
  )

  // return (
  //   <div className='movies'>

    // {data && data.results.map(({title, vote_average, poster_path}) => (
    //   <div key={title} className="item_movies">
    //     <h1>{title}</h1>
    //     <img src={URL_IMG + poster_path} alt={title} width={200} height={250}/>
    //   </div>
    // ))}
      
  //   </div>
  // )
}

export default App

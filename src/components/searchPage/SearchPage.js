import React,{useEffect,useState} from 'react'
import styles from './SearchPage.module.css'
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'
import SwiperWindow from '../swiper/SwiperWindow'

function SearchPage() {
  const [data,setData] = useState(null)
  const [params] = useSearchParams()
  const query = params.get('query')
  const genreQuery = params.get('genre')
  console.log(genreQuery)
  useEffect(()=>{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}`
    if(query){
      console.log('running search query')
      axios.get(url)
      .then(res=>{
        const data = res.data.results
        const newData = data.filter(item=>item.poster_path)
        setData(newData)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },[query])

  useEffect(()=>{
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=${genreQuery}`
    if(genreQuery){
      console.log('running genre query')
      axios.get(url)
      .then(res=>{
        const data = res.data.results
        const newData = data.filter(item=>item.poster_path)
        setData(newData)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },[genreQuery])
  
  return (
    <div className={styles.search}>
      <div className={styles.container}>
        {
          data &&
          <div className={styles.heading}>
            {data.length} search results
          </div>
        }
        {
          data &&
          <SwiperWindow data={data}/>
        }
      </div>
    </div>
  )
}

export default SearchPage
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MovieCard from '../movieCard/MovieCard'
import styles from './Movies.module.css'
import SwiperWindow from '../swiper/SwiperWindow'

function NowShowing() {
  const [data,setData] = useState(null)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then(res=>{
            const data = res.data.results
            const newData = data.filter(item=>item.poster_path)
            setData(newData)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.featured}>FEATURED</div>
        <span className={styles.boldTitle}>Now</span> Showing
      </div>
      {
        data &&
        <SwiperWindow data={data}/>
      }
    </div>
  )
}

export default NowShowing
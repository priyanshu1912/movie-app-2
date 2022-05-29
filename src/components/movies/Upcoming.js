import React,{useState,useEffect} from 'react'
import styles from './Movies.module.css'
import SwiperWindow from '../swiper/SwiperWindow'
import axios from 'axios'

function Upcoming() {
    const [data,setData] = useState(null)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`)
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
        {/* <div className={styles.featured}>FEATURED</div> */}
        {/* <span className={styles.boldTitle}>Now</span> Showing */}
        Upcoming
      </div>
      {
        data &&
        <SwiperWindow data={data}/>
      }
    </div>
  )
}

export default Upcoming
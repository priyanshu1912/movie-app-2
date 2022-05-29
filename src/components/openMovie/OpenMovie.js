import React,{useState,useEffect} from 'react'
import styles from './OpenMovie.module.css'
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'
import {AiOutlineClockCircle,AiOutlineCalendar,AiOutlineStar} from 'react-icons/ai'
import VideoPlayer from '../videoPlayer/VideoPlayer'
import LoaderComp from '../loader/LoaderComp'

function OpenMovie() {
    const [params] = useSearchParams()
    const [data,setData] = useState(null)
    const [videos,setVideos] = useState(null)
    const [cast,setCast] = useState(null)
    useEffect(()=>{
        const details = `https://api.themoviedb.org/3/movie/${params.get('id')}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        const videos = `https://api.themoviedb.org/3/movie/${params.get('id')}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
        const casts = `https://api.themoviedb.org/3/movie/${params.get('id')}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`

        const request1 = axios.get(details)
        const request2 = axios.get(videos)
        const request3 = axios.get(casts)

        axios.all([request1,request2,request3])
        .then(axios.spread((details,videos,casts)=>{
            setData(details.data)
            setVideos(videos.data.results)
            setCast(casts.data.cast)
        }))
        .catch(err=>{
            console.log(err)
        })
    },[params])
  return (
    <>
    {
        data ?
        <div style={{
            width:'100%',
            height:'100vh',
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover'
        }}>
            <div className={styles.container}>
                <div className={styles.name}>
                    <div className={styles.title}>{data.original_title}</div>
                    <div className={styles.overview}>{data.overview}</div>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <AiOutlineStar className={styles.calendar}/>
                            <div>{data.vote_average}</div>
                        </div>
                        <div className={styles.icon}>
                            <AiOutlineCalendar className={styles.calendar}/>
                            <div>{data.release_date}</div>
                        </div>
                        <div className={styles.icon}>
                            <AiOutlineClockCircle className={styles.clock}/>
                            <div>{data.runtime}m</div>
                        </div>
                    </div>
                    <div className={styles.videos}>
                        {
                            videos &&
                            videos.slice(0,2).map(item=>{
                                return(
                                    <VideoPlayer key={item.id} url={item.key}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        :
        <LoaderComp/>
    }
    {/* <div className={styles.main}>
        
    </div> */}
    </>
  )
}

export default OpenMovie
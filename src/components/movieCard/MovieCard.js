import React from 'react'
import styles from './MovieCard.module.css'
import {AiOutlineStar} from 'react-icons/ai'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import {useNavigate,createSearchParams} from 'react-router-dom'

function MovieCard({item}) {
  const navigate = useNavigate()
  const handleClick = (id) => {
    const params = {id: id}
    navigate({
      pathname: '/home/movies',
      search: `${createSearchParams(params)}`
    })
  }
  return (
    <div className={styles.card} onClick={()=>handleClick(item.id)}>
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="poster" 
        className={styles.poster}/>

        <div className={styles.hover}>
          <div className={styles.title}>
            <div>{item.original_title}</div>
            <div className={styles.votings}>
              <AiOutlineStar className={styles.star}/>
              <div>{item.vote_average}</div>
            </div>
          </div>
          <BsFillPlayCircleFill className={styles.play}/>
        </div>
    </div>
  )
}

export default MovieCard
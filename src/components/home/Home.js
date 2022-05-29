import React from 'react'
import styles from './Home.module.css'
import Video from '../../assets/videos/backgroundVideo.mp4'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const handleExplore = () => {
    navigate('/home')
  }
  return (
    <>
    <video className={styles.video} loop autoPlay muted>
        <source src={Video} type="video/mp4"/>
    </video>

    <div className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.topTitle}>
            Watch anywhere, watch anytime
          </div>
          <div className={styles.title}>
            Unlimited movies, <br/>
            TV shows, and more
          </div>
          <div className={styles.explore} onClick={handleExplore}>
            EXPLORE NOW
          </div>
        </div>
    </div>
    </>
  )
}

export default Home
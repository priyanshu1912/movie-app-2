import React from 'react'
import styles from './LandingPage.module.css'
import NowShowing from '../movies/NowShowing'
import Upcoming from '../movies/Upcoming'

function LandingPage() {
  return (
    <div className={styles.landing}>
      <div className={styles.movies}>            
          <NowShowing/>
          <Upcoming/>
      </div>
    </div>
  )
}

export default LandingPage
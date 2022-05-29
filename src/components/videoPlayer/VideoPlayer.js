import React from 'react'
import styles from './VideoPlayer.module.css'
import ReactPlayer from 'react-player'

function VideoPlayer({url}) {
  return (
    <ReactPlayer
     controls 
     url={`https://www.youtube.com/watch?v=${url}`} 
     width="250px"
     height="200px"
     style={{
         marginRight:'30px'
     }}
     className={styles.player}/>
  )
}

export default VideoPlayer
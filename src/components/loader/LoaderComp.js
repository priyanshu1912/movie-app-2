import React from 'react'
import styles from './LoaderComp.module.css'
import ClipLoader from "react-spinners/ClipLoader";

function LoaderComp() {
  return (
    <div className={styles.loader}>
        <div className={styles.loaderIcon}>
            <ClipLoader color='white' loading={true} size={50} />
        </div>
    </div>
  )
}

export default LoaderComp
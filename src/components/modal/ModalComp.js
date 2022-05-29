import React,{useEffect,useState} from 'react'
import styles from './ModalComp.module.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {useNavigate,createSearchParams} from 'react-router-dom'
import axios from 'axios'

function ModalComp({modal,setModal}) {
    const [genre,setGenre] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        if(modal.type==='genre'){
            const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}`
            axios.get(genreUrl)
            .then(res=>{
                setGenre(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },[modal])

    const searchWithGenres = (name) => {
        const params = {genre:name}
        navigate({
            pathname:'/home/search',
            search: `${createSearchParams(params)}`
        })
        setModal(false)
    }

  return (
    <div className={styles.modal}>
        {
            modal.type==='genre' &&
            <div className={styles.container}>
                <AiOutlineCloseCircle className={styles.close} onClick={()=>setModal({type:'',open:false})}/>
                <div className={styles.genres}>
                    {
                        genre &&
                        genre.genres.map(item => {
                            return (
                                <div onClick={()=>searchWithGenres(item.id)} key={item.id} className={styles.genre}>{item.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        }
        {
            modal.type==='login' &&
            <div className={styles.container}>
                <AiOutlineCloseCircle className={styles.close} onClick={()=>setModal({type:'',open:false})}/>
                <div className={styles.google}>
                    <FcGoogle className={styles.googleIcon}/>
                    <div className={styles.googleText}>Sign in with Google</div>
                </div>
            </div>
        }
    </div>
  )
}

export default ModalComp
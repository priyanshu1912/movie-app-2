import React,{useState,useEffect,useRef} from 'react'
import styles from './NavBar.module.css'
import {AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'
import {useLocation,useNavigate,createSearchParams} from 'react-router-dom'
import axios from 'axios'
import ModalComp from '../modal/ModalComp'

function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const ref = useRef()

  const [searchQuery,setSearchQuery] = useState({query:''})
  const [openSearch,setOpenSearch] = useState(false)
  const [modal,setModal] = useState({
    type:'',
    open: false
  })

  // useEffect(()=>{
  //   const checkClick = (e) => {
  //     if(openSearch && ref.current && !ref.current.contains(e.target)){
  //       setOpenSearch(false)
  //     }
  //   }
  //   document.addEventListener('click',checkClick)
  //   return () => {
  //     document.removeEventListener('click',checkClick)
  //   }
  // },[openSearch])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!searchQuery.query){
      return
    }
    navigate({
      pathname: '/home/search',
      search: `${createSearchParams(searchQuery)}`
    })
  }

  const openModal = (type) => {
    setModal({
      type: type,
      open: true
    })
  }

  if(location.pathname==='/' || location.pathname==='/home/movies'){
    return
  }
  return (
    <>
    <div className={styles.navbar}>
      <div className={styles.main}>
        <div className={styles.container1}></div>
          <div className={styles.container2}>
              <div className={styles.options}>
                <div className={styles.option} onClick={()=>openModal('genre')}>Genres</div>
                <div className={styles.option}>Movies</div>
                <div className={styles.option}>TV shows</div>
              </div>
              <form onSubmit={handleSubmit} className={styles.icons}>
                {
                  openSearch?
                  <div className={styles.searchBox}>
                    <AiOutlineSearch className={styles.search}/>
                    <input type='text' autoFocus className={styles.searchInput} 
                    onChange={(e)=>setSearchQuery({query:e.target.value})}/>                
                  </div>
                  :
                  <AiOutlineSearch className={styles.search} onClick={()=>setOpenSearch(true)}/>
                }
                <AiOutlineUser onClick={()=>openModal('login')} className={styles.user}/>
              </form>
          </div>
      </div>
    </div>

    {
      modal.open &&
      <ModalComp modal={modal} setModal={setModal}/>
    }
   </>
  )
}

export default NavBar
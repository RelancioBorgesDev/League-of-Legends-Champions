import React, {useEffect} from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header'
//import api from '../services/riotApi'

export default function Home() {
/*   useEffect(() =>{
    api.get()
  },[]) */

  return (
  <div className={styles.test}>
      <Header/>
  </div>

  )
}

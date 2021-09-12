import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'

export default function Home() {
  return (
  <div className={styles.test}>
      <Header/>
        <div className={styles.content}>
                <h1 className={styles.title}>League Champs.</h1>
                <h4 className={styles.subtitle}>Descubra informações sobre os campeão do League of Legends</h4>
        </div>
  </div>

  )
}

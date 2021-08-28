import styles from '../styles/Home.module.scss';
import Nav from "../components/Nav";
import Footer from '../components/Footer'
import Background from '../components/Background'
export default function Home() {
  return (
    <>
    <div className={styles.main}>
    <Nav />

      <div className = {styles.main__intro}>
        <span className={styles.hello}>Hi ! I am Satvik Kaurav</span>
        <span className={styles.web}>Website Developer || Linux Enthusiast</span>
      </div>

    </div>
    <Background />
    
    
    
    <Footer />
    </>
  )
}

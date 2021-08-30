import styles from '../styles/Home.module.scss';
import Nav from "../components/Nav";
import Footer from '../components/Footer'
import Background from '../components/Background'
import Buttons from '../components/Buttons';

import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
        <title>Satvik Kaurav</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />

    <div className={styles.main}>

    <Background />

      <div className = {styles.main__intro}>
        
        <span className={styles.hello}>Hi ! I am Satvik Kaurav</span>
        <span className={styles.web}>Website Developer || Linux Enthusiast</span>
        {/* <Buttons buttonSize="btn__medium" buttonStyle="btn__outline">Connect to me</Buttons> */}
        </div>
    </div>
    
    
    
    
    <Footer />
    </>
  )
}

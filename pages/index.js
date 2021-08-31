import styles from "../styles/Home.module.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Background from "../components/Background";
import { Button } from "../components/Buttons";
import Link from 'next/link'

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Satvik Kaurav</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      

      <div className={styles.main}>
        <div className={styles.home_nav}>
          <Link href="/aboutme">
          <li className={styles.aboutme}>About Me</li>
          </Link>
          <Link href="/blog">
          <li className={styles.blog}>Blog</li>
          </Link>
          <Link href = "/projects">
          <li className={styles.projects}>Projects</li>
          </Link>
        </div>
        <Background />

        <div className={styles.main__intro}>
          <div className={styles.avatar}>
            
            {/* <Image  src="/../public/images/avatar.jpg" alt="avatar" layout='fill'/> */}
          
          </div>

          <span className={styles.hello}>Satvik Kaurav</span>
          
          <div className = {styles.buttons}>
          <span>
            <Button buttonStyle= "btn__outline" buttonSize="btn__medium">My Resume</Button>
          </span>
          <span>
          <a href="mailto:satvikkaurav10@gmail.com" target="_blank" rel="noreferrer">
          <Button buttonStyle= "btn__primary" buttonSize="btn__medium">Say Hi</Button>
          </a>
          </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

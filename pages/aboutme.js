import Footer from "../components/Footer";
import Nav from "../components/Nav";

import Head from "next/head";
import styles from "../styles/Aboutme.module.scss";

function Aboutme() {
  return (
    <>
      <Head>
        <title>About Me | Satvik Kaurav</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />

      <div className={styles.main}>
        <Footer />
        <div className={styles.aboutme}>
          <div className={styles.aboutme__head}>
            <div className={styles.avatar}></div>
            <div className={styles.hello}>Hello, I am Satvik Kaurav</div>
          </div>
          <ul className={styles.aboutme__content}>
            <li>My Skills are : </li>
            <ul className={styles.aboutme__content__skills}>
              <li>
                Programming Languages :
                <ul>
                  <li>Basics of C/C++</li>
                  <li>Basics of Python</li>
                  <li>Basics of JavaScript</li>
                </ul>
              </li>
              <li>
                Web Development :
                <ul>
                  <li>
                    FrontEnd :
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SCSS</li>
                      <li>React Js Framework</li>
                      <li>Next JS</li>
                    </ul>
                  </li>
                  <li>BackEnd :</li>
                </ul>
              </li>
              <li>Linux
                <ul>
                  <li>Manjaro Linux User</li>
                  <li>Know Basic Commands of linux terminal</li>
                </ul>
              </li>
            </ul>
            <li>My Hobbies are : </li>
            <ul>
              <li>I loves to play Volleyball a lot. I am a State level player of Volleyball. I have played Subjunior state open volleyball tournament and got first prize.</li>
              <li>I also loves to play basketball in my free time. I have played JNV regional level Basketball Tournament representing Jabalpur Cluster</li>
              <li>I loves to listen music and I usually sing lot of songs in my free time or whenever I am tired</li>
              <li>Reading Novels</li>
              <li>Watching Movies, web series and Anime</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aboutme;

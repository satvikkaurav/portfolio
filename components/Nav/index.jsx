import { useState } from 'react';
import Link from 'next/link'
import styles from './Nav.module.scss';

function Nav(){

    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu(){
        setShowMenu(!showMenu);
    };

    return(
        <>
        <header>
        <div className={!showMenu ? styles.menu_btn : `${styles.menu_btn} ${styles.open}`} 
        onClick = {toggleMenu}
        >
        <div className={!showMenu ? styles.menu_btn__burger : `${styles.menu_btn__burger} ${styles.open}`}>

            </div>
        </div>

        <nav className={!showMenu ? styles.nav : `${styles.nav} ${styles.open}`}>
            <ul className={!showMenu ? styles.menu_nav: `${styles.menu_nav} ${styles.open}`}>
                <li className={!showMenu ? styles.menu_nav__item:`${styles.menu_nav__item} ${styles.open}`}>
                    <Link href="/" className={!showMenu ? styles.menu_nav__link : `${styles.menu_nav__link} ${styles.open}`}>Home</Link>
                </li>
                <li className={!showMenu ? styles.menu_nav__item:`${styles.menu_nav__item} ${styles.open}`}>
                    <Link href="/aboutme" className={!showMenu ? styles.menu_nav__link : `${styles.menu_nav__link} ${styles.open}`}>About Me</Link>
                </li>
                <li className={!showMenu ? styles.menu_nav__item:`${styles.menu_nav__item} ${styles.open}`}>
                    <Link href="/blog" className={!showMenu ? styles.menu_nav__link : `${styles.menu_nav__link} ${styles.open}`}>Blog</Link>
                </li>
                <li className={!showMenu ? styles.menu_nav__item:`${styles.menu_nav__item} ${styles.open}`}>
                    <Link href="/projects" className={!showMenu ? styles.menu_nav__link : `${styles.menu_nav__link} ${styles.open}`}>Projects</Link>
                </li>
             
            </ul>
        </nav>
        <div className={styles.main_nav}>
          <Link href="/">
          <li className={styles.aboutme}>Home</li>
          </Link>
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
        </header>
        </>
    );
}

export default Nav;
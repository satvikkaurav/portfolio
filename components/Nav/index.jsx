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
                    <Link href="/skills" className={!showMenu ? styles.menu_nav__link : `${styles.menu_nav__link} ${styles.open}`}>Skills</Link>
                </li>
                <li className={!showMenu ? styles.menu_nav__item:`${styles.menu_nav__item} ${styles.open}`}>
                    <Link href="/projects" className={!showMenu ? styles.menu_nav__link : `${styles.menu_nav__link} ${styles.open}`}>Projects</Link>
                </li>
                <li className={!showMenu ? styles.menu_nav__item:`${styles.menu_nav__item} ${styles.open}`}>
                    <Link href="/contact" className={!showMenu ? styles.menu_nav__link : `${styles.menu_nav__link} ${styles.open}`}>Contact Me</Link>
                </li>
                
                
            </ul>
        </nav>
        </header>
        </>
    );
}

export default Nav;
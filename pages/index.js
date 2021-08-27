import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Nav from "../components/Nav";
import SocialIcons from '../components/SocialIcons';

export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <Image src="/../public/images/back_2.jpg" alt='Background Image' layout='fill'  />
    </div>
    
    <Nav />
    
    <SocialIcons />
    </>
  )
}

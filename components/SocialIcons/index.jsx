import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from './SocialIcons.module.scss'

function SocialIcons(){
return(
    <div className={styles.container}>
        <ul className={styles.social}>
            <li className={styles.social__github}><a href="">
            <FontAwesomeIcon icon = {faGithub} />
            </a></li>
            <li className={styles.social__linkedin}><a href="">
            <FontAwesomeIcon icon = {faLinkedin} />
            </a></li>
            <li className={styles.social__instagram}><a href="">
            <FontAwesomeIcon icon = {faInstagram} />
            </a></li>
            <li className={styles.social__twitter}><a href="">
            <FontAwesomeIcon icon = {faTwitter} />
            </a></li>
            <li className={styles.social__fb}><a href="">
            <FontAwesomeIcon icon = {faFacebook} />
            </a></li>
        </ul>
    </div>
)
}
export default SocialIcons;
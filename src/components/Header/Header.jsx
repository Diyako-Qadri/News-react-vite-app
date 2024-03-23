import styles from "./Header.module.css"
import email from "./../../assets/image/icons8-email-30.png"
import facebook from "./../../assets/image/icons8-facebook-30 (kopia).png"
import instagram from "./../../assets/image/icons8-instagram-30 (kopia).png"
import twitter from "./../../assets/image/icons8-twitter-30.png"
import phone from "./../../assets/image/icons8-phone-30.png"

const Header = ({pagetitle}) => {

    return(
        <header className={styles.header}>
            <div className={styles.socialIcons}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={email} alt="" />
                <img src={twitter} alt="" />
            </div>

            <h1>{pagetitle}</h1>

        <button className={styles.callbtn}> <img src={phone} className={styles.phoneIcons} alt="" />(999)717-515</button>
        </header>
    )
}

export default Header
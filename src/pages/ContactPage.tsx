import { Helmet } from 'react-helmet';
import styles from '/src/css/contact.module.scss'
import Header from "../components/Header"
import twitter from "/src/assets/twitter_icon.svg"
import facebook from "/src/assets/fb_icon.svg"
import instagram from "/src/assets/ig_icon.svg"

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Steve Dillon Exhibition</title>
      </Helmet>
      <Header/>
      <div className={styles.contactPageSection}>
        <div className={styles.contactContent}>
          <h1>Get in touch</h1>
          <p>If you’re interested in including the Steve Dillon Exhibition in your upcoming show, please feel free to reach out and say hello... </p>
          <h2>Email us</h2>
          <a href="mailto:exhibitions.stevedillon@gmail.com">exhibitions.stevedillon@gmail.com</a>
          <h2>Follow us</h2>
          <div className={styles.smIcons}>
            <a href="https://twitter.com/SDillonExhibs" target="_blank" rel="noopener noreferrer">
              <img src={twitter} className={styles.twitterIcon} alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100082204026570" target="_blank" rel="noopener noreferrer">
              <img src={facebook} className={styles.twitterIcon} alt="" />
            </a>
            <a href="https://www.instagram.com/steve_dillon_exhibition/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className={styles.twitterIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
    

  )
}

export default ContactPage
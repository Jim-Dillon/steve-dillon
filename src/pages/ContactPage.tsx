import styles from '/src/css/contact.module.scss'
import Header from "../components/Header"
import twitter from "/src/assets/twitter_icon.svg"
import facebook from "/src/assets/fb_icon.svg"
import instagram from "/src/assets/ig_icon.svg"

const ContactPage = () => {
  return (
    <>
      <Header/>
      <div className={styles.contactPageSection}>
        <div className={styles.contactContent}>
          <h1>Get in touch</h1>
          <p>If you’re interested in including the Steve Dillon Exhibition in your upcoming show, please feel free to reach out and say hello... </p>
          <h2>Email us</h2>
          <a href="mailto:exhibitions.stevedillon@gmail.com">exhibitions.stevedillon@gmail.com</a>
          <h2>Follow us</h2>
          <div className={styles.smIcons}>
            <button>
              <img src={twitter} className={styles.twitterIcon} alt="" />
            </button>
            <button>
              <img src={facebook} alt="" />
            </button>
            <button>
              <img src={instagram} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
    

  )
}

export default ContactPage
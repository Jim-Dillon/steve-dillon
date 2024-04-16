import styles from '/src/css/contact.module.scss'
import Header from "../components/Header"

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
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </>
    

  )
}

export default ContactPage
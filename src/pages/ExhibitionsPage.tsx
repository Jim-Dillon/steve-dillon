import styles from '/src/css/exhib.module.scss'
import Header from "../components/Header"

const ExhibitionsPage = () => {
  return (
    <>
      <Header/>
      <div className={styles.exhibPage}>
        <div className={styles.exhibTopSection}>
          <div className={styles.exhibTopContent}>
            <h1>Exhibitions</h1>
            <h2>Coming Up</h2>
            <div className={styles.exhibImageContainer}>
              <img src="" alt="" />
            </div>
            <p>20th - 28th July 2024</p>
            <h2>Enniskillen Comic Fest</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu scelerisque pellentesque montes cras dignissim et.</p>
            <p>Northern Ireland</p>
          </div>
        </div>
        <div className={styles.exhibTimeline}>

        </div>
        <div className={styles.exhibFeature}>

        </div>
      </div>
      
    </>
  )
}

export default ExhibitionsPage
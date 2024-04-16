import styles from '/src/css/exhib.module.scss'
import enniskillen from '/src/assets/img/enniskillen.png'
import Header from "../components/Header"
import Timeline from '../components/Timeline'
import Button from '../components/shared/Button'

const ExhibitionsPage = () => {
  return (
    <>
      <Header/>
      <div className={styles.exhibPage}>
        <div className={styles.exhibTopSection}>
          <div className={styles.exhibTopContent}>
            <h1>Exhibitions</h1>
            <div className={styles.topContent__Sections}>
              <div className={styles.topContent__SectionOne}>
                <h2>Coming Up</h2>
                <div className={styles.exhibImageContainer}>
                  <img src={enniskillen} alt="" />
                </div>
              </div>
              <div className={styles.topContent__SectionTwo}>
                <p className={styles.exhib_metaData}>20th - 28th July 2024</p>
                <h2>Enniskillen Comic Fest</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu scelerisque pellentesque montes cras dignissim et.</p>
                <p className={styles.exhib_metaData}>Enniskillen, Northern Ireland</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exhibTimeline}>
          <Timeline/>
        </div>
        <div className={styles.exhibFeature}>
          <div className={styles.exhibFeatureContent}>
            <h2>Feature the exhibition</h2>
            <p>We’re very proud every time we’re able to bring the exhibition to a new space. If you’re interested in including the Steve Dillon Exhibition in your upcoming show, please feel free to reach out and say hello... </p>
            <div className={styles.exhibFeatureButton}>
              <Button
                linkPath="/steve-dillon/contact">
                Say hello... 
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExhibitionsPage
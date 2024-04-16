import styles from '/src/css/about.module.scss'
import steveDraw from '/src/assets/img/SD_draw.png'
import panel from '/src/assets/img/panel_img.png' 
import luton from '/src/assets/img/luton_bros.png'
import Header from "../components/Header";
import Button from '../components/shared/Button';


const AboutPage = () => {
  return (
    <>
      <Header/>
      <div className={styles.aboutSection}>
        <div className={styles.aboutTopContent}>
          <h1>About</h1>
          <p className={styles.aboutTopPara}>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu scelerisque pellentesque montes cras dignissim et.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu scelerisque pellentesque montes cras dignissim et.</p>
        </div>
        <div className={styles.steveImgContainer}>
          <img src={steveDraw} alt="" />
        </div>
        <div className={styles.aboutSecondContent}>
          <p>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu scelerisque pellentesque montes cras dignissim et.</p>
        </div>
        <div className={styles.aboutImagesContainer}>
          <img src={panel} alt="" />
          <img src={luton} alt="" />
        </div>
        <div className={styles.aboutThirdContent}>
          <p>Reviews section - Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod.  
          </p>
          <ul className={styles.reviewsList}>
            <li>Review One</li>
            <li>Review One</li>
            <li>Review One</li>
            <li>Review One</li>
          </ul>
        </div>
        <div className={styles.aboutSupportContainer}>
          <div className={styles.aboutSupportContent}>
            <h2>Support the Exhibition</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod.</p>
            <Button 
              linkPath={'https://www.gofundme.com/f/steve-dillon-exhibition'}
              target="_blank">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
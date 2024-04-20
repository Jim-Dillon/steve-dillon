import { Helmet } from 'react-helmet';
import styles from '/src/css/about.module.scss'
import steveDraw from '/src/assets/img/SD_draw.png'
import panel from '/src/assets/img/panel_img.png' 
import luton from '/src/assets/img/luton_bros.png'
import Header from "../components/Header";
import Button from '../components/shared/Button';


const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Steve Dillon Exhibition</title>
      </Helmet>
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
        <div className={styles.aboutSupportContainer}>
          <div className={styles.aboutSupportContent}>
            <h2>Support the Exhibition</h2>
            <p>We love sharing Steve’s work with those that want to see it and love meeting people who share with us stories about Steve. It keeps his legacy alive, which is nice, as I think we can all agree that he was taken too soon.</p>
            <p>We desperately want to continue touring the exhibition around the world, but with that comes costs for travel, framing, insurance etc. The artwork isn't for sale so we don't make any profit during the tour, and both my husband (Steve’s son Mark) and I work full time, we have 2 young children and our time is limited.</p>
            <p>Rebellion and DC have kindly agreed for us to use a few images to turn into prints / T-shirts to sell as merchandise at conventions to help fund the exhibition. BUT this is where we need your help! With the money we raise, we can get the prints and T-shirts made, framing, travel, insurance and then if there is anything left over, we can put that towards a proper storage space for the exhibition.</p>
            <p>So please, if you have been to see the exhibition and enjoyed it or if you haven’t yet seen it but would love to visit at some point and you can spare even £1 to help, that would be amazing.</p>
            <Button 
              linkPath={'https://www.gofundme.com/f/steve-dillon-exhibition'}
              target="_blank">
              Support
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
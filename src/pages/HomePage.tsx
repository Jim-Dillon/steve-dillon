import Header from "../components/Header";
import styles from '../css/home.module.scss';
import preacher from '/src/assets/img/preacher.png';
import book from '/src/assets/img/2000ad.png'; 
import store from '/src/assets/shop_img.svg';
import Button from "../components/shared/Button";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={styles.homeIntroSection}>
        <div className={styles.homeImageContainer}>
          <img src={preacher} alt="" className={styles.homeImage}/>
        </div>
        <div className={styles.homeIntroText}>
          <p>Celebrating the work of Steve Dillon</p>
          <p>in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu sce</p>
        </div>
      </div>
      <div className={styles.whatsNewSection}>
        <div className={styles.whatsNewTitle}>
          <h1>What's new</h1>
        </div>
        <div className={styles.whatsNewImageContainer}>
          <img src={book} alt="" className={styles.whatsNewImage} />
        </div>
        <div className={styles.whatsNewBookTitle}>
          <h2>Name of book</h2>
        </div>
        <div className={styles.whatsNewContent}>
          <p>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu scelerisque pellentesque montes cras dignissim et.</p>
        </div>
        <div className={styles.whatsNewButton}>
          <Button>
            Order a copy
          </Button>
        </div>
      </div>
      <div className={styles.onlineStoreSection}>
        <div className={styles.storeImageContainer}>
          <img src={store} alt="" />
        </div>
      </div>
    </> 
  )
}

export default HomePage
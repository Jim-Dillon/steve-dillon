import Header from "../components/Header";
import styles from '../css/home.module.scss';
import preacher from '/src/assets/img/home_grid/one.png';
import tiedUp from '/src/assets/img/home_grid/two.png'
import capAm from '/src/assets/img/home_grid/three.png'
import punisher from '/src/assets/img/home_grid/four.png'
import skull from '/src/assets/img/home_grid/five.png'
import book from '/src/assets/img/2000ad.png'; 
import store from '/src/assets/shop_img.svg';
import Button from "../components/shared/Button";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={styles.homeIntroSection}>
        <div className={styles.homeImageContainer}>
          <div className={styles.homeImage_ColOne}>
            <img src={preacher} alt="" className={styles.homeImage}/>
          </div>
          <div className={styles.homeImage_ColTwo}>
            <div className={styles.homeImage_RowOne}>
              <img src={tiedUp} alt="" className={styles.homeImage}/> 
            </div>
            <div className={styles.homeImage_RowTwo}>
              <img src={capAm} alt="" className={styles.homeImage}/>
              <img src={punisher} alt="" className={styles.homeImage}/>
            </div>
            
          </div>
          <div className={styles.homeImage_ColThree}>
            <img src={skull} alt="" className={styles.homeImage}/>
          </div>
        </div>
        <div className={styles.homeIntroText}>
          <p>Celebrating the work of Steve Dillon</p>
          <p>in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu sce</p>
        </div>
      </div>
      <div className={styles.whatsNewSection}>
        <div className={styles.whatsNewContainer}>
          <div className={styles.whatsNew_ColOne}>
            <div className={styles.whatsNewTitle}>
              <h1>What's new</h1>
            </div>
            <div className={styles.whatsNewImageContainer}>
              <img src={book} alt="" className={styles.whatsNewImage} />
            </div>
          </div>
          <div className={styles.whatsNew_ColTwo}>
            <div className={styles.whatsNewContent}>
              <h2>Name of book</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer. Ultricies pellentesque id eu scelerisque pellentesque montes cras dignissim et.</p>
              <Button
                linkPath={'https://2000ad.com/news/announcing-the-2000-ad-art-of-steve-dillon-apex-edition/'}>
                Order a copy
              </Button>
            </div>  
          </div>
        </div>
        
      </div>
      <div className={styles.onlineStoreSection}>
        <div className={styles.storeImageContainer}>
          <img src={store} alt="" />
        </div>
        <div className={styles.storeContent}>
          <h2>Check out our online store</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in.</p>
          <Button>
            Shop now
          </Button>
        </div>
      </div>
    </> 
  )
}

export default HomePage
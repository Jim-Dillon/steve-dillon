import Header from "../components/Header";
import styles from '../css/home.module.scss';
import preacher from '/src/assets/img/home_grid/one.png';
import tiedUp from '/src/assets/img/home_grid/two.png'
import capAm from '/src/assets/img/home_grid/three.png'
import punisher from '/src/assets/img/home_grid/four.png'
import skull from '/src/assets/img/home_grid/five.png'
import book from '/src/assets/img/2000ad.png'; 
import store from '/src/assets/shop_img.png';
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
          <p>Touring exhibition set up by the family of Steve Dillon, to showcase and honour the work of a comic book legend.</p>
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
              <h2>The 2000AD Art of Steve Dillon</h2>
              <p>The Steve Dillon Apex edition is released on 19th June 2024, with pre-orders available now on the 2000 AD webshop for both the standard and the webshop-exclusive slipcase editions.</p>
              <Button
                linkPath={'https://2000ad.com/news/announcing-the-2000-ad-art-of-steve-dillon-apex-edition/'}
                target="_blank">
                Pre-order
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
          <h2>Look out for merchandise</h2>
          <p>People have been asking us to sell merchandise at conventions... we have listened and we're turning some of Steve's iconic images into prints/T-shirt!</p>
          <p>With your support, we can bring some of this merchandise to a convention near you.</p>
          <Button
            linkPath={'https://www.gofundme.com/f/steve-dillon-exhibition'}
            target="_blank">
              Support
          </Button>
        </div>
      </div>
    </> 
  )
}

export default HomePage
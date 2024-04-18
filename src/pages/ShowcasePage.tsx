import styles from '/src/css/showcase.module.scss'
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import imageData from "../components/imageData";

const ShowcasePage = () => {

  return (
    <>
      <Header />
      <div className={styles.carouselContainer}>
        <Carousel images={imageData}/>
      </div>
    </>
  )
}

export default ShowcasePage
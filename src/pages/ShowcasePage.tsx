import { Helmet } from 'react-helmet';
import styles from '/src/css/showcase.module.scss'
import { useState } from 'react';
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import imageData from "../components/imageData";
import ArrowLeft from '../components/ArrowLeft';
import ArrowRight from '../components/ArrowRight';

const ShowcasePage = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageData.length - 1 : prevIndex - 1))
    }

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === imageData.length - 1 ? 0 : prevIndex + 1));
      };

  return (
    <>
      <Helmet>
        <title>Showcase | Steve Dillon Exhibition</title>
      </Helmet>
      <Header />
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrackContainer}>
          <Carousel images={imageData} currentImageIndex={currentImageIndex}/>
        </div> 
      </div>
      <div className={styles.carouselArrowsContainer}>
        <div className={styles.carouselArrows}>
          <ArrowLeft onClick={goToPrevImage}/>
          <div className={styles.imgCounter}>
            {currentImageIndex + 1}/36
          </div>
          <ArrowRight onClick={goToNextImage}/>
        </div>
      </div>
    </>
  )
}

export default ShowcasePage
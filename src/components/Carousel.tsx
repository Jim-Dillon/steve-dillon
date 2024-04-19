import styles from '../css/showcase.module.scss';
import { FunctionComponent } from 'react'
import CarouselImage from './CarouselImage';

export interface CarouselProps {
    images: string[],
    currentImageIndex: any
}

const Carousel: FunctionComponent<CarouselProps> = ({ images, currentImageIndex }) => {

      return (
        <div className={styles.carousel}>
            <CarouselImage src={images[currentImageIndex]}/>
        </div>
      )
}

export default Carousel;
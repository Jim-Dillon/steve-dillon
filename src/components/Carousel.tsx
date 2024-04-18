// import styles from '../css/header.module.scss';
import { FunctionComponent } from 'react'
import { useState } from 'react';
import CarouselImage from './CarouselImage';

export interface CarouselProps {
    images: string[],
}

const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };

      return (
        <div>
            <CarouselImage src={images[currentImageIndex]}/>
        </div>
      )
}
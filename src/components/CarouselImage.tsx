import { FunctionComponent } from 'react'
// import styles from '../css/header.module.scss';

export interface CarouselImageProps {
    src: string,
}

const CarouselImage: FunctionComponent<CarouselImageProps> = ({src}) => {
  return (
    <img src={src} alt="carousel" />
  )
}

export default CarouselImage
import { FunctionComponent } from 'react'
import { leftArrow } from '../assets/SVG'
import styles from '../css/showcase.module.scss';

export interface ArrowLeftProps {
    onClick: any,
}

const ArrowLeft: FunctionComponent<ArrowLeftProps> = ({ onClick }) => (
    <div className={`${styles.leftArrow} ${styles.arrows}`} onClick={onClick}>
        {leftArrow}
    </div>
  );
  
  export default ArrowLeft;
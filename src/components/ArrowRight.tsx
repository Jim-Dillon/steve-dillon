import { FunctionComponent } from 'react'
import { rightArrow } from '../assets/SVG';
import styles from '../css/showcase.module.scss';

export interface ArrowRightProps {
    onClick: any,
}

const ArrowRight: FunctionComponent<ArrowRightProps> = ({ onClick }) => (
    <div className={styles.rightArrow} onClick={onClick}>
        {rightArrow}
    </div>
  );
  
  export default ArrowRight;
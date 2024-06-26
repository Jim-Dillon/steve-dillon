import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import styles from '/src/css/home.module.scss';

export interface ButtonProps {
    children: any,
    linkPath?: any,
    target?: string
}

const Button: FunctionComponent<ButtonProps> = ( {children, linkPath, target} ) => {
  return (
    <button className={styles.btn}>
      <Link 
        to={linkPath}
        target={target}>
          {children}
      </Link>  
    </button>
  )
}

export default Button
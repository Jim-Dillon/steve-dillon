import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import styles from '/src/css/home.module.scss';

export interface ButtonProps {
    children: any,
    linkPath?: any
}

const Button: FunctionComponent<ButtonProps> = ( {children, linkPath} ) => {
  return (
    <button className={styles.btn}>
      <Link to={linkPath}>
        {children}
      </Link>  
    </button>
  )
}

export default Button
import { FunctionComponent } from "react";
import styles from '/src/css/home.module.scss';

export interface ButtonProps {
    children: any
}

const Button: FunctionComponent<ButtonProps> = ( {children} ) => {
  return (
    <button className={styles.btn}>
        {children}
    </button>
  )
}

export default Button
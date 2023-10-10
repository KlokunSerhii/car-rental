import { FC, ReactNode } from 'react';
import styles from './Container.module.css';

interface PropsContainer {
  children: ReactNode;
  className?: {}
}

const Container: FC<PropsContainer> = ({ children, className = '' }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
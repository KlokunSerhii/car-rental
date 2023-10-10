import React, { FC } from "react";
import styles from "./Title.module.css";

interface PropsTitle {
  title: string;
  className?: {};
}

const Title: FC<PropsTitle> = ({ title, className = "" }) => {
  return (
    <h1 className={`${styles.titleContainer} ${className}`}>
      {title}
    </h1>
  );
};

export default Title;

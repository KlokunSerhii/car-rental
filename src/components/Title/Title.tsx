import React, { FC } from "react";
import styles from "./Title.module.css";

interface PropsTitle {
  title: string;
}

const Title: FC<PropsTitle> = ({ title }) => {
  return <h1 className={styles.titleContainer}>{title} </h1>;
};

export default Title;

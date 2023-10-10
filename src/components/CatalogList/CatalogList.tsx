import data from "../../data.json";
import CatalogItem from "../CatalogItem";
import { PropsCatalogList } from "../../interface/PropsCatalogList";
import styles from "./CatalogList.module.css";

const CatalogList = (props: { cars: PropsCatalogList[] }) => {
  return (
    <ul className={styles.ListCatalog}>
      {data.map((el) => (
        <CatalogItem key={el.id} car={el} />
      ))}
    </ul>
  );
};
export default CatalogList;

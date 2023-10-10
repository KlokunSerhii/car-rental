import React, { FC } from "react";
import { PropsCatalogList } from "../../interface/PropsCatalogList";
import styles from "./CatalogItem.module.css";

interface PropsCatalogItem {
  car: PropsCatalogList;
}
const CatalogItem: FC<PropsCatalogItem> = ({ car }) => {
  console.log(car);
  return (
    <li className={styles.list_item}>
      <img src={car.img} alt={car.make} className={styles.img_car} />
      <div className={styles.car_box}>
        <h3>
          {car.make}
          {/* <span className={styles.car_model}>{car.model}</span> */}
          , <span>{car.year}</span>
        </h3>

        <p className={styles.car_price}>{car.rentalPrice}</p>
      </div>
      <div className={styles.car_info_box}>
        <p className={styles.car_info}>{car.address.split(",")[1]}</p>
        <p className={styles.car_info}>{car.address.split(",")[2]}</p>
        <p className={styles.car_info}>{car.rentalCompany}</p>
        <p className={styles.car_info}>{car.type}</p>
        <p className={styles.car_info}> {car.mileage}</p>
        <p className={styles.car_info}>{car.model}</p>
        <p className={styles.car_info}>{car.accessories[0]}</p>
      </div>
      <button type="button" className={styles.car_btn}>
        Learn more
      </button>
    </li>
  );
};
export default CatalogItem;

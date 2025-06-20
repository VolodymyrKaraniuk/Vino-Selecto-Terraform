import { useState } from "react";
import styles from "./Favorites.module.scss";

export const Favorites = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <>
      <h2 className={styles.title}>Saved items</h2>
      <div className={styles.favorites}>
        <div className={`${styles.favorites__box} ${styles.box}`}>
          <img
            className={styles.box__img}
            src="/src/assets/images/saved_image.png"
            alt="order_image"
          />
          <p className={styles.box__name}>Montrose 2005</p>
          <div className={`${styles.box__buttons} ${styles.buttons}`}>
            <button className={styles.buttons__button} onClick={handleDecrease}>
              -
            </button>
            <span className={styles.buttons__quantity}>{quantity}</span>
            <button className={styles.buttons__button} onClick={handleIncrease}>
              +
            </button>
          </div>
          <button className={styles.box__add}>Add to cart</button>
        </div>
        <div className={`${styles.favorites__right} ${styles.right}`}>
          <button className={styles.right__delete}>
            <img
              className={styles.right__img}
              src="/src/assets/images/delete_icon.svg"
              alt="delete"
            />
          </button>
          <div className={styles.right__button}>16,000 UAH</div>
        </div>
      </div>
    </>
  );
};

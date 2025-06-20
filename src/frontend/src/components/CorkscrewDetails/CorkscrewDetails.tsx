import styles from "./CorkscrewDetails.module.scss";

export const CorkscrewDetails = () => {
  return (
    <div className={styles.root}>
      <button className={styles.root__button}>◀</button>
      <main className={styles.main}>
        <h2 className={styles.main__title}>Con Brio</h2>
        <div className={styles.main__items}>
          <div className={`${styles.main__item}, ${styles.item}`}>
            <h3 className={styles.item__title}>Quantity in set:</h3>
            <p className={styles.item__text}>{1}</p>
            <h3 className={styles.item__title}>Dimensions:</h3>
            <p className={styles.item__text}>{"13 x 5 cm."}</p>
            <h3 className={styles.item__title}>Material:</h3>
            <p className={styles.item__text}>{"Stainless steel"}</p>
          </div>
          <div className={`${styles.main__item}, ${styles.images}`}>
            <img
              src="/src/assets/images/corkscrew.png"
              alt="main image"
              className={styles.images__main}
            />
          </div>
          <div className={`${styles.main__item}, ${styles.item}`}>
            <div className={styles.item__price}>{16000} UAN</div>
            <button className={styles.item__button}>Add to cart</button>
          </div>
        </div>
      </main>
      <div className={styles.separator}></div>
      <p className={styles.description}>
        Con Brio is a tool for those who open wine as an art. It is not just a
        corkscrew - it is a ritual embodied in steel, wood and precision of
        movement. The Con Brio corkscrew is made for true connoisseurs: it
        combines elegant sommelier-class design with uncompromising
        functionality. Its double hinge ensures a smooth and controlled movement
        - each turn opens the bottle easily, without jerks, without excessive
        effort. The screw with Soft-Twist coating enters the cork gently, with
        jeweler's precision. And the natural wood handle gives a feeling of
        warmth and reliability - the same feeling you feel when you hold
        something real in your hand, created with attention to detail. Con Brio
        is elegance in every movement, confidence in every opening. The perfect
        accessory for an evening with Bordeaux or for a quiet moment alone with
        Pinot Noir.
      </p>
    </div>
  );
};

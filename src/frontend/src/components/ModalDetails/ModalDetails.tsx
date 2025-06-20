import styles from "./ModalDetails.module.scss";

export const ModalDetails = () => {
  return (
    <div className={styles.root}>
      <button className={styles.root__button}>◀</button>
      <main className={styles.main}>
        <h2 className={styles.main__title}>Chateau Montrose 2005</h2>
        <div className={styles.main__items}>
          <div className={`${styles.main__item}, ${styles.item}`}>
            <h3 className={styles.item__title}>Vintage</h3>
            <p className={styles.item__text}>{2005}</p>
            <h3 className={styles.item__title}>Colour:</h3>
            <p className={styles.item__text}>{"red"}</p>
            <h3 className={styles.item__title}>Type:</h3>
            <p className={styles.item__text}>{"dry"}</p>
            <h3 className={styles.item__title}>Grape variety:</h3>
            <ul className={styles.item__text}>
              <li className={styles[`item__text--li`]}>
                Cabernet Sauvignon (65%)
              </li>
              <li className={styles[`item__text--li`]}>Merlot (25%)</li>
              <li className={styles[`item__text--li`]}>Cabernet Franc (8%)</li>
              <li className={styles[`item__text--li`]}>Petit Verdot (2%)</li>
            </ul>
            <h3 className={styles.item__title}>Capacity:</h3>
            <p className={styles.item__text}>{750} ml</p>
            <h3 className={styles.item__title}>Alcohol content:</h3>
            <p className={styles.item__text}>{13}%</p>
            <h3 className={styles.item__title}>Producer:</h3>
            <p className={styles.item__text}>{"sss"}</p>
            <h3 className={styles.item__title}>Region:</h3>
            <p className={styles.item__text}>{"Ukraine"}</p>
          </div>
          <div className={`${styles.main__item}, ${styles.images}`}>
            <img
              src="/src/assets/images/wine_image.png"
              alt="main image"
              className={styles.images__main}
            />
            <div className={styles.images__secondery}>
              <img
                src="/src/assets/images/wine_front.png"
                alt="front"
                className={styles["images__secondery--front"]}
              />
              <img
                src="/src/assets/images/image_wine_back.png"
                alt="back"
                className={styles[`images__secondery--back`]}
              />
            </div>
          </div>
          <div className={`${styles.main__item}, ${styles.item}`}>
            <div className={styles.item__price}>{16000} UAN</div>
            <button className={styles.item__button}>Add to cart</button>
          </div>
        </div>
      </main>
      <div className={styles.separator}></div>
      <p className={styles.description}>
        Sweet, juicy aromas. Abundance of elegance and grace. Massive tannins
        are wrapped in a really beautiful and elegant fruit taste. A dry but not
        drying finish. Quite sophisticated. A rather complex sample. Expected
        maturity: 2019 - 2040. (JR Deg. 2017)
        <br />
        <br />
        Montrose 2005 continues to shine, unfolding in the glass with notes of
        black currants, red fruits, clay soil, black truffles and cigar ash. The
        wine is full-bodied, deep and concentrated, it is still astringent and
        tannic, with vigorous acidity and an impressive structure of the
        (artery-cleansing) extract. Still young, this is one of the last great
        vintages of old-school Montrose, and Medoc purists can't get enough.
        Although this wine remains very young, it is now clear that 2005 will
        surpass the wines of 1989 and 1990 in terms of maturation. Expected
        maturity: 2025 - 2065. (WA Dec. 2022)
        <br />
        <br />
        Still thick and lingering, aromas of juicy figs and black currants are
        framed by charcoal notes. The long finish passes through a deep river of
        smoldering tobacco and notes of warm stones. Strict and, it would seem,
        closed, but at the same time very beautiful wine. Maybe it's not your
        style, but it's undeniably a wonderful specimen. Expected maturity: 2022
        - 2042. (WS Deg. 2018)
      </p>
    </div>
  );
};

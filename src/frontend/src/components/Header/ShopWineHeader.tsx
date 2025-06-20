import styles from "./ShopWineHeader.module.scss";
import { Link } from "react-router-dom";

export const ShopWineHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__top} ${styles.top}`}>
          <Link to="/" className={styles.top__logo}>
            Vino Selecto
          </Link>
          <div className={`${styles.top__links} ${styles.links}`}>
            <Link to="/catalog" className={styles.links__link}>
              Wine catalog
            </Link>
            <Link to="/contacts" className={styles.links__link}>
              Delivery and contacts
            </Link>
            <Link to="/accessories" className={styles.links__link}>
              Wine Accessories
            </Link>
          </div>
          <div className={styles.top__search}>
            <svg
              className={styles["top__search--icon"]}
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              className={styles["top__search--input"]}
              placeholder="Search"
              type="text"
            />
          </div>

          <div
            className={`${styles["top__right-side"]} ${styles["right-side"]}`}
          >
            <button className={styles["right-side__switcher"]}>En</button>
            <div
              className={`${styles["right-side__icons"]} ${styles["icons"]}`}
            >
              <Link to="/moon" className={styles.icons__icon}>
                <img src="/src/assets/images/moon.svg" alt="moon" />
              </Link>
              <Link to="/favorites" className={styles.icons__icon}>
                <img src="/src/assets/images/heart.svg" alt="heart" />
              </Link>
              <Link to="/cart" className={styles.icons__icon}>
                <img src="/src/assets/images/cart.svg" alt="cart" />
              </Link>
              <Link to="/user" className={styles.icons__icon}>
                <img src="/src/assets/images/user.svg" alt="user" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.header__bottom}>
          <p className={`${styles["header__bottom--title"]}`}>Vino Selecto</p>
        </div>
      </header>
    </>
  );
};

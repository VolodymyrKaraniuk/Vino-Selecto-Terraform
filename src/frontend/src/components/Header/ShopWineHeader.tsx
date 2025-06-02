import styles from "./ShopWineHeader.module.scss";

export const ShopWineHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__top} ${styles.top}`}>
          <a href="#" className={styles.top__logo}>
            Vino Selecto
          </a>
          <div className={`${styles.top__links} ${styles.links}`}>
            <a href="#" className={styles.links__link}>
              Wine catalog
            </a>
            <a href="#" className={styles.links__link}>
              Delivery and contacts
            </a>
            <a href="#" className={styles.links__link}>
              Wine Accessories
            </a>
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
              <a href="#" className={styles.icons__icon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </a>
              <a href="#" className={styles.icons__icon}>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </a>
              <a href="#" className={styles.icons__icon}>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </a>
              <a href="#" className={styles.icons__icon}>
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </a>
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

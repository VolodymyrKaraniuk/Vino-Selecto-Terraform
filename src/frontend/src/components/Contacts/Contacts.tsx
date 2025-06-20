import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <section className={styles.accessories}>
      <p className={styles.text}>
        We work directly with wine producers from all over the world and are
        official representatives of wineries in Ukraine. Our catalog includes
        selected wines from France, Italy, Ukraine, Chile, the USA, New Zealand
        and other wine regions.
        <br />
        <br />
        Our goal is to make quality wine accessible to every Ukrainian. We offer
        only certified products that meet international standards and preserve
        the true taste and character of their country of origin.
        <br />
        <br />
        We deliver throughout Ukraine by Nova Poshta.
      </p>
      <div className={styles.contacts}>
        <h2 className={styles.name}>Contacts</h2>
        <h3 className={styles.title}>Office address:</h3>
        <p className={styles.text}>
          12-B Vinogradna St., Kharkiv, 61024 (near the metro station
          "University")
        </p>
        <h3 className={styles.title}>Phone:</h3>
        <p className={styles.text}>+38 (093) 876-54-21</p>
        <h3 className={styles.title}>Email:</h3>
        <p className={styles.text}>info@winecatalog.ua</p>
        <h3 className={styles.title}>Working hours:</h3>
        <p className={styles.text}>
          Mon–Fri: 10:00–19:00 Sat: 11:00–16:00 Sun: closed
        </p>
      </div>
    </section>
  );
};

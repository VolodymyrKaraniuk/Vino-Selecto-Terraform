import { GlassesList } from "../GlassesList/GlassesList";
import { NarzannikList } from "../NarzannikList/NarzannikList";
import styles from "./ListOfList.module.scss";

export const ListOfList = () => {
  return (
    <div className={styles.list}>
      <div className={styles.list__block}>
        <h2 className={styles.list__title}>Glasses</h2>
        <GlassesList />
      </div>
      <div className={styles.list__block}>
        <h2 className={styles.list__title}>Decanter</h2>
      </div>
      <div className={styles.list__block}>
        <h2 className={styles.list__title}>Narzannik</h2>
        <NarzannikList />
      </div>
    </div>
  );
};

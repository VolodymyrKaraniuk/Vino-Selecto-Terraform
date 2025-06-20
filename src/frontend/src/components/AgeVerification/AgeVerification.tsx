import styles from "./AgeVerification.module.scss";
import { createPortal } from "react-dom";

interface AgeVerificationType {
  isOpen: boolean;
  handleAccept: () => void;
}

export const AgeVerification: React.FC<AgeVerificationType> = ({
  isOpen,
  handleAccept,
}) => {
  if (!isOpen) return null;

  const ageModal = document.getElementById("age-root");
  if (!ageModal) {
    return null;
  }

  return createPortal(
    <div className={styles.background}>
      <div className={styles["modal-overlay"]}>
        <div>
          <img
            src="/src/assets/images/18+.svg"
            alt="18+"
            className={styles["modal-overlay__icon"]}
          />

          <h2 className={styles["modal-overlay__title"]}>
            We do not sell alcoholic beverages to persons under the age of
            majority!
          </h2>
          <div className={`${styles["modal-overlay__buttons"]}`}>
            <button
              className={`${styles["modal-overlay__button--not"]}`}
              onClick={handleAccept}
            >
              I am not 18 years old
            </button>
            <button
              className={`${styles["modal-overlay__button--yes"]}`}
              onClick={handleAccept}
            >
              I am already 18 years old.
            </button>
          </div>
        </div>
      </div>
    </div>,
    ageModal
  );
};

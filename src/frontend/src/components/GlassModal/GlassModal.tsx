import { useEffect, useState } from "react";
import styles from "./GlassModal.module.scss";
import { ShopWineLoader } from "../Loader/ShopWineLoader";
import type { GlassModalType } from "./GlassModalType";

interface GlassesModalProps {
  id: number;
}

export const GlassesModal = ({ id }: GlassesModalProps) => {
  const [glassData, setGlassData] = useState<GlassModalType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://back-vonoselecto-bedagphgf7cgeqf3.uksouth-01.azurewebsites.net/api/shop/glass/${id}/`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) {
          console.log("Failed to fetch wine data");
          throw new Error("Failed to fetch wine data");
        }
        const data: GlassModalType = await response.json();

        setGlassData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!glassData) return <div>No wine data found</div>;

  return (
    <>
      {loading ? (
        <ShopWineLoader />
      ) : (
        <div className={styles.modal}>
          <img
            src={glassData.product.image}
            alt="image glass"
            className={styles.modal__image}
          />
          <div className={`${styles.modal__title}`}>
            {glassData?.product.name_of_product}
          </div>
          <p className={`${styles.modal__description}`}>
            {glassData?.product.description}
          </p>
          <dl className={`${styles.modal__capacity}`}>
            <dt className={styles["modal__capacity--title"]}>Capacity:</dt>
            <dd className={styles["modal__capacity--ml"]}>
              {glassData.product.stock_quantity}
            </dd>
          </dl>
          <div className={styles[`modal__product-actions`]}>
            <div className={`${styles.modal__buttons} ${styles.buttons}`}>
              <button
                className={styles.buttons__button}
                onClick={handleDecrease}
              >
                -
              </button>
              <span className={styles.buttons__quantity}>{quantity}</span>
              <button
                className={styles.buttons__button}
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <svg
              className={styles.modal__icon}
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
          </div>
          <div className={styles.modal__price}>
            {glassData?.product.price}UAN
          </div>
          <button className={styles["modal__add-to-cart"]}>Add to cart</button>
        </div>
      )}
    </>
  );
};

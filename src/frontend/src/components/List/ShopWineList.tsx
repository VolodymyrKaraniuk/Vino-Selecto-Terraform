import { useEffect, useState } from "react";
import { ShopWineModal } from "../Modal/ShopWineModal";
import type { ShopWineModalType } from "../Modal/ShopWineModalType";
import { ShopWineLoader } from "../Loader/ShopWineLoader";
import styles from "./ShopWineList.module.scss";

export const ShopWineList = () => {
  const [wines, setWines] = useState<ShopWineModalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch(
          "https://back-vonoselecto-bedagphgf7cgeqf3.uksouth-01.azurewebsites.net/api/shop/wine/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch wines");
        const data = await response.json();
        setWines(data.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchWines();
  }, []);

  if (loading) return <ShopWineLoader />;
  if (error) return <div>Error: {error}</div>;
  if (!wines.length) return <div>No wines found</div>;

  return (
    <>
      <div className={styles.lists}>
        <div>
          {wines.map((wine) => (
            <ShopWineModal key={wine.id} id={wine.id} />
          ))}
        </div>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { GlassesModal } from "../GlassModal/GlassModal";
import type { GlassesListType } from "./GlassesListType";
import { ShopWineLoader } from "../Loader/ShopWineLoader";

export const GlassesList = () => {
  const [glasses, setGlasses] = useState<GlassesListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch(
          "https://back-vonoselecto-bedagphgf7cgeqf3.uksouth-01.azurewebsites.net/api/shop/glass/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch wines");
        const data = await response.json();
        setGlasses(data.results);
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
  if (!glasses.length) return <div>No wines found</div>;

  return (
    <>
      <div>
        {glasses.map((glass) => (
          <GlassesModal key={glass.id} id={glass.id} />
        ))}
      </div>
    </>
  );
};

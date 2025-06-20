import { useEffect, useState } from "react";
import { NarzannikModal } from "../Narzannik/NarzannikModal";
import type { NarzannikModalType } from "./NarzarnnikListType";

export const NarzannikList = () => {
  const [narzs, setNarzs] = useState<NarzannikModalType[]>([]);
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
        setNarzs(data.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchWines();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!narzs.length) return <div>No wines found</div>;

  return (
    <>
      <div>
        {narzs.map((narz) => (
          <NarzannikModal key={narz.id} id={narz.id} />
        ))}
      </div>
    </>
  );
};

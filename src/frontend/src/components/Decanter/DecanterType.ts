export interface DecanterWineModalType {
  id: number;
  product: {
    id: number;
    name: string;
    description: string;
    priceUSD: string;
    stockQty: number;
    priceRange: string;
    typeOfProduct: string;
    imageLink: string;
  };
  wineType: string;
  color: string;
  country: {
    id: number;
    name: string;
  };
  producer: {
    id: number;
    country: {
      id: number;
      name: string;
    };
    region: string;
  };
  yearVintage: number;
  alcoholPercentage: string;
  moods: Array<{
    id: number;
    name: string;
  }>;
}

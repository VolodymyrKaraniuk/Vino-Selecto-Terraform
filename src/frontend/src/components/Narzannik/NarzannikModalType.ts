export interface NarzannikModalType {
  id: number;
  product: {
    id: number;
    productName: string;
    description: string;
    price: number;
    availableStock: number;
    priceRange: string;
    category: string;
    imageUrl: string;
  };
  originCountry: {
    id: number;
    countryName: string;
  };
  producer: {
    id: number;
    countryOfOrigin: {
      id: number;
      name: string;
    };
    regionName: string;
  };
  material: string;
  moods: {
    id: number;
    moodName: string;
  }[];
}
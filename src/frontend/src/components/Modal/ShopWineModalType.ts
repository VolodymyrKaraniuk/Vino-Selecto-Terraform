export interface ShopWineModalType {
  id: number;
  product: {
    id: number;
    name_of_product: string;
    description: string;
    price: string;
    stock_quantity: number;
    price_range: string;
    product_type: string;
    image: string;
  };
  wine_type: string;
  color: string;
  country: {
    id: number;
    name: string;
  };
  producer: {
    id: number;
    name_of_country: {
      id: number;
      name: string;
    };
    name_of_region: string;
  };
  vintage_year: number;
  alcohol: string;
  moods: {
    id: number;
    name: string;
  }[];
}

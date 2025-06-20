export interface GlassModalType {
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
  capacity: number;
  country: {
    id: number;
    name: string;
  };
  height: string;
  diameter: string;
  material: string;

  glass_type: string;
  color: string;
  
  producer: {
    id: number;
    name_of_country: {
      id: number;
      name: string;
    };
    name_of_region: string;
  };
  alcohol: string;
  moods: {
    id: number;
    name: string;
  }[];
}

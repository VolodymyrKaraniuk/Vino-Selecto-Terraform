export interface Wine {
  id: number;
  product: {
    id: number;
    name_of_product: string;
    price: string;
  };
  wine_type: string;
  color: string;
  vintage_year: number;
}

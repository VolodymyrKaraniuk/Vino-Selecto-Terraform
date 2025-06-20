export interface GlassesListType {
  id: number;
  product: number;
  capacity: number;
  country: {
    id: number;
    name: string;
  };
  height: string;
  diameter: string;
  material: string;
}
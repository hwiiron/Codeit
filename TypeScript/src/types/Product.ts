import Size from "./Size";

export default interface Product {
  id: string;
  name: string;
  price: number;
  memberOnly?: boolean;
  sizes?: string[];
}

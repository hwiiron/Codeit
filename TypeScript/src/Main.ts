import Product from "./types/Product";
import Size from "./types/Size";

const product1: Product = {
  id: "c001",
  name: "블랙 후드티",
  price: 129000,
  memberOnly: true,
  sizes: [Size.S, Size.M],
};

const product2: Product = {
  id: "d001",
  name: "텀블러",
  price: 25000,
};

console.log(product1);
console.log(product2);

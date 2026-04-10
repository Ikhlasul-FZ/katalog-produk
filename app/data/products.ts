export interface Product {
  id: string;
  name: string;
  category: "Streetwear" | "Activewear" | "Casual";
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "st-01",
    name: "CYBER OVERSIZED HOODIE",
    category: "Streetwear",
    description: "Technical fabric with reflective neon stitching and reinforced seams.",
    price: 189,
    image: "/products/streetwear-hoodie.png",
  },
  {
    id: "st-02",
    name: "NEO-CARGO PANTS",
    category: "Streetwear",
    description: "Weather-resistant nylon with modular pockets and adjustable straps.",
    price: 210,
    image: "/products/streetwear-pants.png",
  },
  {
    id: "ac-01",
    name: "KINETIC COMPRESSION TOP",
    category: "Activewear",
    description: "Next-gen moisture-wicking tech designed for high-intensity movement.",
    price: 95,
    image: "/products/activewear-top.png",
  },
  {
    id: "ac-02",
    name: "FLUX RUNNING SHOES",
    category: "Activewear",
    description: "Gravity-cushioned soles with adaptive mesh upper for ultimate speed.",
    price: 245,
    image: "/products/activewear-shoes.png",
  },
  {
    id: "cs-01",
    name: "MINIMALIST SILK BLAZER",
    category: "Casual",
    description: "Deconstructed tailoring meets premium luxury silk blend.",
    price: 320,
    image: "/products/casual-blazer.png",
  },
  {
    id: "cs-02",
    name: "OSIRIS LINEN SHIRT",
    category: "Casual",
    description: "Breathable raw linen with hidden button placket and relaxed fit.",
    price: 110,
    image: "/products/casual-shirt.png",

  },
];
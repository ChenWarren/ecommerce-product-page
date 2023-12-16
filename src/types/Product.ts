

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  salePrice: number;
  featuredImage: string;
  gallery: ProductImage[];
}

export type ProductImage = {
  id: string;
  title: string;
  altText: string;
  url: string;
  thumbNail: string;
}
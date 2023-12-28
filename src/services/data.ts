
import { CartItem } from "../types/Cart";
import { Menu } from "../types/Menu";
import { Product } from "../types/Product";

// Menu item array
export const menu: Menu[] = [
  {
    id: '1',
    name:'Collections',
    link: '#'
  },
  {
    id: '2',
    name: 'Men',
    link: '#'
  },
  {
    id: '3',
    name: 'Women',
    link: '#'
  },
  {
    id: '4',
    name: 'About',
    link: '#'
  },
  {
    id: '5',
    name: 'Contact',
    link: '#'
  }
];

// Product data
export const product: Product = 
{
  id: 'p-1',
  title: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the waether can offer.',
  price: 250.00,
  salePrice: 125.00,
  featuredImage: './image-product-1.jpg',
  gallery: [
    {
      id: 'img-1',
      title: '',
      altText: '',
      url: './image-product-1.jpg',
      thumbNail: './image-product-1-thumbnail.jpg'
    }
  ]
}

// Testing cart item data
export const cartItem: CartItem[] = [
  {
    id: "c-1",
    productId: "p-1",
    quantity: 1
  }
]

// Get product data by ID
export const getProductById = (id: string) => {
  return product.id === id ? product : null;
}
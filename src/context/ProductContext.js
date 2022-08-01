import {createContext} from 'react';

export const ProductContext = createContext({
  Products: [
    {
      id: 1,
      title: 'Red Rose',
      price: 25,
      imageUrl: 'https://i.im.ge/2022/07/31/FNzB7h.product1.png',
      description: '31.08.2022',
    },
    {
      id: 2,
      title: 'Floribunda Roses',
      price: 25.5,
      imageUrl: 'https://i.im.ge/2022/07/31/FNzJcX.product2.png',
      description: '31.08.2022',
    },
  ],
  ShoppingCart: [],
});

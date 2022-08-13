import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../context/ProductContext";

export default function useBillCalculator() {
  const { state } = useContext(ProductContext);
  const { Products, ShoppingCart } = state;
  const [bill, setBill] = React.useState(false);

  const getBill = () => {
    const result = calculateBill(ShoppingCart, Products);
    setBill(result);
  };

  return [bill, getBill];
}

export const calculateBill = (cartItems, productItems) => {
  let subTotal = 0;
  let discount = 0;
  const deliveryFee = 5;

  cartItems.map((item) => {
    let dicountRate = item.count >= 3 ? 0.5 : 1;
    const product = productItems.filter((f) => f.id === item.id)[0];
    subTotal += product.price * item.count;
    if (dicountRate < 1) discount += product.price * item.count * dicountRate;
  });
  let total = subTotal + deliveryFee - discount;

  return { subTotal, deliveryFee, discount, total };
};

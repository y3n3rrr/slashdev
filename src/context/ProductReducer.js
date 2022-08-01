import {
  ADD_PRODUCT_TO_CART,
  ADD_NEW_PRODUCT,
  INCREMENT_PRODUCT_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './types';

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const {id} = action.payload;
      const data = state.ShoppingCart.filter(f => f.id == id);
      if (data.length > 0) {
        const updatedData = state.ShoppingCart.map(x =>
          x.id === id ? {...x, count: x.count + 1} : x,
        );
        return {...state, ShoppingCart: updatedData};
      } else {
        return {
          ...state,
          ShoppingCart: [...state.ShoppingCart, {id, count: 1}],
        };
      }
      break;
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        Products: [...state.Products, action.payload],
      };
      break;
    case INCREMENT_PRODUCT_CART:
      const {incrementVal} = action.payload;
      const item = state.ShoppingCart.filter(f => f.id == action.payload.id);
      if (item.length > 0) {
        const updatedData = state.ShoppingCart.map(x =>
          x.id === action.payload.id
            ? {...x, count: x.count + incrementVal}
            : x,
        );
        return {...state, ShoppingCart: updatedData};
      }
      return {...state};
    case REMOVE_PRODUCT_FROM_CART:
      const newItems = state.ShoppingCart.filter(
        f => f.id !== action.payload.id,
      );
      return {...state, ShoppingCart: [...newItems]};
    default:
      break;
  }
}

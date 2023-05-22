import { ATTACH_CART, DELETE_CART } from "../actions/cartActions";
type product = { name: string; id: number };
type stateType = { cart: object[]; products: product[] };

const initialState: stateType = {
  cart: [],
  products: [
    { name: "Apple mobile", id: 1 },
    { name: "Samsung mobile", id: 2 },
    { name: "Xiaomi mobile", id: 3 },
    { name: "HTC mobile", id: 4 },
    { name: "SONY mobile", id: 5 },
    { name: "Oneplus mobile", id: 5 },
  ],
};

const cartReducers = (state = initialState, action: any) => {
  switch (action?.type) {
    case ATTACH_CART:
      return {
        cart: [...state?.cart, action?.id],
      };
    case DELETE_CART:
      return {
        cart: state?.cart?.filter((id) => action?.id != id),
      };
    default:
      return state;
  }
};

export default cartReducers;

export const ATTACH_CART: string = "ATTACH_CART";
export const DELETE_CART: string = "DELETE_CART";

export const attachCart = (
  id: number | string
): { type: string; id: number | string } => {
  return { type: ATTACH_CART, id };
};
export const deleteCart = (
  id: number | string
): { type: string; id: number | string } => {
  return { type: DELETE_CART, id };
};

import React from "react";
type productType = {
  product: {
    name: string;
    id: number;
  };
};
const Product = ({ product }: productType) => {
  return (
    <div style={{ border: "1px solid tomato", paddingBottom: "15px" }}>
      <h5>{product?.name}</h5>
      <button onClick={() => {}}>add to cart</button>
    </div>
  );
};

export default Product;

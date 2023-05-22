import React from "react";
import Product from "../Product/Product";
import { connect } from "react-redux";
import { attachCart } from "../../redux/actions/cartActions.tsx";
type productType = {
  id: number;
  name: string;
};
const Shop = (props: any) => {
  console.log("props:", props);
  const { products } = props;
  return (
    <div>
      <h2>This is Shop</h2>
      {products.map((pd: productType) => (
        <Product product={pd} key={pd.id} />
      ))}
    </div>
  );
};
const mapStateToProps = (state: { cart: object[]; products: object[] }) => {
  return {
    cart: state?.cart,
    products: state?.products,
  };
};
const mapDispatchToProps = {
  attachCart: attachCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

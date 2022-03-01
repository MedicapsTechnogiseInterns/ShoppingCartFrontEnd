import React from "react";
import { ProductDetail } from "../product-store/Product";

export interface CartProps {
  productDetail: ProductDetail;
}

const Cart: React.FC<CartProps> = ({ productDetail }) => {

  let quantity = 1;



  return (
      <div>
        <h3>{productDetail.name}</h3>
        <img src={productDetail.image} alt={productDetail.name} />
        <p>Price : {productDetail.price}</p>
        <button>-</button>
        <p>Quantity : {quantity}</p>
        <button>+</button>
        <p>Total : {+productDetail.price * quantity}</p>
      </div>
  );
};

export default Cart;

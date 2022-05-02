import React from "react";
import { useContext } from "react";
import CartContext, { CartProductDetail } from "../../store/CartContext";
import { CartItemsContent, CartItemServiceResponse, createCartItem } from "../cart/api/CartApi";
import { ProductWrapper } from "./ProductCard.style";

export interface ProductDetail {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}
export interface ProductProps {
  productDetail: ProductDetail;
}

const Product: React.FC<ProductProps> = ({ productDetail }) => {
  const cartCtx = useContext(CartContext);
  console.log("In product: ", { productDetail });

  function itemAddHandler() {
    let cartItem: CartProductDetail = {
      customerId: "b4f5f670-269c-42d1-8753-89a212344c66",
      id: productDetail.id,
      name : productDetail.name,
      image : productDetail.image,
      price : productDetail.price,
      quantity : 1
    }
    cartCtx.addItemsInCart(cartItem);
    createCartItem(cartItem);
  }

  

  return (
    <ProductWrapper>
    <div className="Card">
        <div className="image"> 
            <img src={productDetail.image} alt={productDetail.name}></img>          
        </div>
        <div className="Flex">
            <h3>{productDetail.name}</h3>
            <h4>INR {productDetail.price}</h4>
        </div> 
            <p>{productDetail.description}</p>
            <button onClick={itemAddHandler}>Add to Cart</button>
    </div>
    </ProductWrapper>
  );
};

export default Product;
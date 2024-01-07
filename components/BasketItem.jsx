import React from "react";
import Badge from "react-bootstrap/Badge";

function BasketItem({ chocolat, totalProduct, handlOpenCart, addItemToCart }) {
  console.log(totalProduct);
  return (
    <div className="basket">
      <span
        onClick={() => {
          handlOpenCart(); // Make sure this function is implemented in the parent component
          addItemToCart(chocolat.id); // Ensure this function updates the cart state
        }}
      >
        {totalProduct}
      </span>
      <img id="panier" src={require("../images/panier.png")} alt="panier" />
    </div>
  );
}
export default BasketItem;
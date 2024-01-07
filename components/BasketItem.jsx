ureimport React from "react";
import Badge from "react-bootstrap/Badge";

function BasketItem({ chocolat, totalProduct, handlOpenCart, addItemToCart }) {
  console.log(totalProduct);
  return (
    <div className="basket">
      <span
        onClick={() => {
          handlOpenCart(); // ouverture du panier pop up
          addItemToCart(chocolat.id); // joue sur l'état du panier pop up, ajoute un produit en fonction de l'id chocolat (contenu)
        }}
      >
        {totalProduct}
      </span>
      <img id="panier" src={require("../images/panier.png")} alt="panier" />
    </div>
  );
}
export default BasketItem;

import React, { useState, useEffect, useContext, useRef } from "react";
import "../styles/Navbar.css";
import "../styles/chocolat.css";
import CartModal from "../components/CartModal";
import BasketItem from "../components/BasketItem";
import PanierContext from "../store/panier-context";
// import "../styles/Bootstrap.css";

function Navbar() {
const { totalProduct } = useContext(PanierContext);
const [showLinks, setshowLinks] = useState(false); // menu fermer par défault
const [color, setColor] = useState(false); // changer couleur au scroll de la navbar
const [cart, setCart] = useState({});
const [chocolat, setChocolats] = useState([]);
const handleShowLinks = () => {
setshowLinks(!showLinks); // activation du sholinks si true sinon false
};
const { addItemToCart } = useContext(PanierContext);

const modalRef = useRef();
console.log(totalProduct);
const handlOpenCart = () => {
modalRef.current.open();
};

// changer couleur au scroll de la navbar

const changeColor = () => {
setColor(window.scrollY >= 90);
};

useEffect(() => {
window.addEventListener("scroll", changeColor);
return () => {
  window.removeEventListener("scroll", changeColor);
};
}, []);

return (
<>
  <CartModal ref={modalRef} />
  <nav className={color ? "fixed navbar navbar-bg" : "fixed navbar"}>
    <nav className={`fixed navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar-logo">
        <img
          id="logomenucoverdesktop"
          src={require("../images/logo.png")}
          alt="logomobilecover"
        />
      </div>

      <BasketItem
        chocolat={chocolat}
        totalProduct={totalProduct}
        handlOpenCart={handlOpenCart}
        addItemToCart={addItemToCart}
      />

      <ul className="nav-links">
        <li className="navbar_item ">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar-item ">
          <a href="/boutique" className="navbar_link">
            Boutique
          </a>
        </li>

        <li className="navbar-item ">
          <img
            id="logomenucovermobile"
            src={require("../images/logo.png")}
            alt="logomobilecover"
          />
        </li>

        <li className="navbar-item"></li>
      </ul>
      <button className="navbar-burger"></button>
      <div className="burger-bar" onClick={handleShowLinks}></div>
    </nav>
  </nav>
</>
);
}

export default Navbar;

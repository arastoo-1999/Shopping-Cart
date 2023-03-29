import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../Context/CartContextProvider';

// Icons
import shopIcon from "../assets/shop.svg";

// Styles
import Styles from "../Styles/Navbar.module.scss";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={Styles.Container}>
            <div className={Styles.Links}>
                <Link className={Styles.ProductsLink} to="/products">Products</Link>
                <Link className={Styles.CartLink} to="/Cart"><img src={shopIcon} alt="shop" /></Link>
                <span className={Styles.CartCounter}>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;
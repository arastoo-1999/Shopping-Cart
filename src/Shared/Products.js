import React, { useContext } from 'react';
import {Link} from "react-router-dom";

// Functions
import { Shorten, isInCart, quantityCount } from '../helpers/functions';

// Styles
import styles from "../Styles/Products.module.css";

// Context
import { CartContext } from '../Context/CartContextProvider';

const Products = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.Container}>
            <img src={productData.image} alt="product"/>
            <h3>{Shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.allButtons}>
                <Link className={styles.linkButton} to={`/products/${productData.id}`}>Details</Link>
            <div>
                {
                quantityCount(state, productData.id) > 1 && <button className={styles.minus} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>
                }
                {
                quantityCount(state, productData.id) === 1 && <button className={styles.remove} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>Remove</button>
                } 
                {
                isInCart(state, productData.id) 
                ? 
                <button className={styles.plus} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> 
                :
                <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})} className={styles.addButton}>Add to Cart</button>
                }
            </div>
            </div>
        </div>
    );
};

export default Products;
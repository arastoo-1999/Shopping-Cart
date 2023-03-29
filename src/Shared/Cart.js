import React, { useContext } from 'react';

// Context
import { CartContext } from '../Context/CartContextProvider';

// Functions
import { Shorten } from '../helpers/functions';

// Icons
import Trash from "../assets/trash.svg";

// Styles
import Styles from "../Styles/Cart.module.scss";

const Cart = (props) => {

    const {state, dispatch} = useContext(CartContext);
    const {image, price, title, quantity} = props.data;

    return (
        <div className={Styles.Main}>
            <div className={Styles.Container}>
                <img src={image} alt="product" />
                <div>
                    <h3 className={Styles.Title}>{Shorten(title)}</h3>
                    <p className={Styles.Price}>{price} $</p>
                </div>
                <div className={Styles.Quantity}>
                    <span>{quantity}</span>
                </div>
                <div className={Styles.Buttons}>
                    {
                        quantity > 1 
                        ?
                        <button className={Styles.Minus} onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button>
                        :
                        <button className={Styles.Remove} onClick={() => dispatch({type:"REMOVE_ITEM", payload: props.data})}><img src={Trash} alt="trash" /></button>
                    }
                    {
                        <button className={Styles.Plus} onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context 
import { CartContext } from '../Context/CartContextProvider';

// Components
import Cart from '../Shared/Cart';

// Styles 
import Styles from "../Styles/ShopCart.module.scss";

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={Styles.ShopCartContainer}>
            {
                state.selectedItems.map(item => <Cart key={item.id} data={item} />)
            }
            {
                state.itemsCounter > 0 && <div className={Styles.StatusContainer}>
                    <p><span className={Styles.TotalItems}>Total Items:</span> {state.itemsCounter}</p>
                    <p><span className={Styles.TotalPayments}>Total Payments:</span> {state.total} $</p>
                    <div className={Styles.ButtonContainer}>
                        <button className={Styles.Clear} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button className={Styles.CheckOut} onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={Styles.checkOutContainer}>
                    <h2 className={Styles.Head}>Checked Out Successfully</h2>
                    <Link className={Styles.ProductsLink} to="/products">Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0  && <div className={Styles.ClearContainer}>
                    <h2 className={Styles.Head}>Want to buy?</h2>
                    <Link className={Styles.ProductsLink} to="/products">Back to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;
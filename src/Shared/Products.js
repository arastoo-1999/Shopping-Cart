import React from 'react';

// Functions
import { Shorten } from '../helpers/functions';

// Styles
import styles from "../Styles/Products.module.css";

import {Link} from "react-router-dom";

const Products = ({productData}) => {
    return (
        <div className={styles.Container}>
            <img src={productData.image} alt="product"/>
            <h3>{Shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.Buttons}>
                <Link className={styles.linkButton} to={`/products/${productData.id}`}>Details</Link>
                <button className={styles.addButton}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

// Context
import { ProductsContext } from '../Context/ProductsContextProvider';

// Functions
import { Shorten } from '../helpers/functions';

// Styles
import Styles from "../Styles/ProductDetails.module.scss";

const ProductDetails = () => {

    
    const {id} = useParams();
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, price, title, description, category} = product;

    return (
        <div className={Styles.Main}>
            <div className={Styles.ouetrContainer}>
                <img src={image} alt="product" width="200px" />
                <div className={Styles.innerContainer}>
                    <h3 className={Styles.Title}>{Shorten(title)}</h3>
                    <p className={Styles.Description}>{description}</p>
                    <p className={Styles.Category}><span>Category:</span> {category}</p>
                    <div className={Styles.lastSection}>
                        <span className={Styles.Price}>{price}$</span>
                        <Link className={Styles.Backbutton} to="/products">Back to Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
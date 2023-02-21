import React, {createContext, useState, useEffect} from 'react';

// API
import { getProducts } from '../Services/api';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const FetchApi = async () => {
            setProducts(await getProducts());
        }

        FetchApi();
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
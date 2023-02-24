import React, { useContext } from 'react';

// Context
import { ProductsContext } from '../Context/ProductsContextProvider';

// Components
import Products from '../Shared/Products';

const Store = () => {

    const products = useContext(ProductsContext);
    
    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {
                products.map(
                    product => <Products 
                    key={product.id} 
                    productData={product}/>)
            }
        </div>
    );
};

export default Store;
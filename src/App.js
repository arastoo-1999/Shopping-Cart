import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';

// Context 
import ProductsContextProvider from './Context/ProductsContextProvider';
import CartContextProvider from './Context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;

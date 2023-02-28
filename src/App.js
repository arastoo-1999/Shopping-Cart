import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Shared/Navbar';
import ShopCart from './Components/ShopCart';

// Context 
import ProductsContextProvider from './Context/ProductsContextProvider';
import CartContextProvider from './Context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;

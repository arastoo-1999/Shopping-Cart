import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';

// Context 
import ProductsContextProvider from './Context/ProductsContextProvider';


function App() {
  return (
    <ProductsContextProvider>
      <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;

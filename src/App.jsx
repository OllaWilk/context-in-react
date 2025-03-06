import React from 'react';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { CartContextProvider } from './store/shoping-cart-context.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

function App() {
  return (
    <CartContextProvider>
      {/* w nowej wersji reacta nie potrzebuję providera */}
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;

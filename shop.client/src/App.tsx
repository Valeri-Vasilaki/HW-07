
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import { ProductsContext } from './Context';
import { useEffect, useState } from 'react';
import { getProducts } from './api';
import { IProduct } from '@Shared/types';

const App = () => {


  const [products, setProducts] = useState<IProduct[] | null>();
  useEffect(() => {
    getProducts().then(r => setProducts(r));
  }, [])
  console.log("app.tsx: products?.length = ", products?.length)

  return (
    <BrowserRouter> 

      <ProductsContext.Provider value={{ products: products??[] }}>
        <Layout />
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;

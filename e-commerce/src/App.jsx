import './App.css'
import Products from './Components/Shopping/Products';
import Header from './Components/Shopping/Header';
import CartContextProvider from './Context/cartContext';
import Cart from './Components/Shopping/Cart';
import Form from './Components/Shopping/Form';
import { useState } from 'react';

function App() {

  const [iscart, setIscart] = useState(false);
  const [isLogin, setIslogin] = useState(false);
  return (
    <>
        {
          isLogin ?  
          <CartContextProvider>
            <main>
              <Header  iscart={iscart} setIscart = { setIscart} />
              {
                iscart ? <Cart/> : <Products/>
              }
            </main>
          </CartContextProvider> : <Form setIslogin={setIslogin}/>
        }
    </>

  )
}

export default App

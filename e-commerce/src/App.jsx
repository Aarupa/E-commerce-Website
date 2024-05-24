import './App.css'
import Products from './Components/Shopping/Products';
import Navbar from './Components/Shopping/Navbar';
import CartContextProvider from './Context/cartContext';
import Cart from './Components/Shopping/Cart';
import Form from './Components/Shopping/Form';
import { useState } from 'react';

function App() {

  const [iscart, setIscart] = useState(false);
  const [isLogin, setIslogin] = useState(false);
  return (
    <>
        {/* {
          isLogin ?  
          <CartContextProvider>
            <main>
              <Header  iscart={iscart} setIscart = { setIscart} />
              {
                iscart ? <Cart/> : <Products/>
              }
            </main>
          </CartContextProvider> : <Form setIslogin={setIslogin}/>
        } */}
        <Navbar/>
    </>

  )
}

export default App

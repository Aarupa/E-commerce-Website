// import './App.css'
// import Products from './Components/Shopping/Products';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './Components/Shopping/Navbar';
// import CartContextProvider from './Context/cartContext';
// import Cart from './Components/Shopping/Cart';
// import Form from './Components/Shopping/Form';
// import Hero from './Components/Shopping/Hero';
// import { useState } from 'react';

// function App() {

//   const [iscart, setIscart] = useState(false);
//   const [isLogin, setIslogin] = useState(false);
//   return (
//     <>
//         {
//           isLogin ?  
//           <CartContextProvider>
//             <main>
//               <Navbar  iscart={iscart} setIscart = { setIscart} />
//               {
//                 iscart ? <Cart/> : <Products/>
//               }
//             </main>
//           </CartContextProvider> : <Form setIslogin={setIslogin}/>
//         }
//        <Hero/>
//     </>

//   )
// }
 
// export default App


import './App.css';
import Products from './Components/Shopping/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Shopping/Navbar';
import CartContextProvider from './Context/cartContext';
import Cart from './Components/Shopping/Cart';
import Form from './Components/Shopping/Form';
import Hero from './Components/Shopping/Hero';
import { useState } from 'react';

function App() {
  const [iscart, setIscart] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <CartContextProvider>
        <Navbar iscart={iscart} setIscart={setIscart} isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={ <Form setIsLogin={setIsLogin}/>} />
          <Route path="/products" element={ isLogin ? <Products /> :  <Form setIsLogin={setIsLogin}/> } />
          <Route path="/" element={<Hero />} /> 
        </Routes>
      </CartContextProvider>
    </Router>
  );
}

export default App;


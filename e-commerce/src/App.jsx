import './App.css'
import Products from './Components/Shopping/Products';
import Header from './Components/Shopping/Header';
import CartContextProvider from './Context/cartContext';
function App() {
  return (
    <CartContextProvider>
      <main>
        <Header />
        <Products />
      </main>
    </CartContextProvider>

  )
}

export default App

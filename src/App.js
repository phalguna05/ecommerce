import './App.css';
import { CartProvider } from './Components/CartContext';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import {ProductProvider} from './Components/ProductContext';
import RouterSetup from './Components/RouterSetup';
import { CategoryProvider } from './Components/CategoryContext';
import { SearchProvider } from './Components/SearchContext';
function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <SearchProvider>
        <CategoryProvider>
      <RouterSetup>
    <div className="App">
      <Home/>
      <NavBar/>
      <Cart/>
    </div>
    </RouterSetup>
    </CategoryProvider>
    </SearchProvider>
    </CartProvider>
   
    </ProductProvider>
  );
}

export default App;

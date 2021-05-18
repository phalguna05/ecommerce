import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import RouterSetup from './Components/RouterSetup';
function App() {
  return (
   
      <RouterSetup>
    <div className="App">
      <Home/>
      <NavBar/>
      <Cart/>
    </div>
    </RouterSetup>
  );
}

export default App;

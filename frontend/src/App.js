import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="index.html">Shopal</a>
        </div>

        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    
    <main>
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/" component={HomeScreen} exact />
    </main>

    <footer className="row center">
        All rights reserved
    </footer>
</div>
    </div>
    </BrowserRouter>
  );
}

export default App;

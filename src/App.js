import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Component
import Home from './Pages/Home/Home.jsx';
import Cart from './Pages/Cart/Cart';

//Layout
import LayoutMain from './Layout/LayoutMain.jsx';
//Context
import {CartProvider} from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Switch>
           <LayoutMain>
            <Route path="/" exact>
              <Home/>
            </Route>
            </LayoutMain>
          </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

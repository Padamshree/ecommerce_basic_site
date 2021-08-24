import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from "./store";

import Navbar from "./components/common/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import SideDrawer from "./components/common/SideDrawer";
import Backdrop from "./components/common/Backdrop";
import ProductView from "./components/ProductView";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Navbar click={() => setToggle(!toggle)} />
        <Backdrop toggle={toggle} click={() => setToggle(false)} />
        <SideDrawer toggle={toggle} click={() => setToggle(false)} />
        <main className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:id" component={ProductView} />
          </Switch>
        </main>
      </Router>
    </Provider>
  );
}

export default App;

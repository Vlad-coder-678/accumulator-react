import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import {
  HomePage,
  BackgroundsPage,
  HoversPage,
  ButtonsPage,
  BurgerMenuPage,
  PreloadersPage,
  SlidersPage,
  ParalaxEffectsPage,
} from "./pages";

const App = () => {
  return (
    <div className="app">
      <Router>
        <nav className="navApp">
          <Link to="/">Home page</Link>
          <Link to="/bg">Backgrounds</Link>
          <Link to="/hovers">Hovers</Link>
          <Link to="/buttons">Buttons</Link>
          <Link to="/menu_burger">Menu Burger</Link>
          <Link to="/preloaders">Preloaders</Link>
          <Link to="/sliders">Sliders</Link>
          <Link to="/paralaxes">Paralaxes</Link>
        </nav>
        <Route exact={true} path="/" component={HomePage}></Route>
        <Route path="/bg" component={BackgroundsPage}></Route>
        <Route path="/hovers" component={HoversPage}></Route>
        <Route path="/buttons" component={ButtonsPage}></Route>
        <Route path="/burger_menu" component={BurgerMenuPage}></Route>
        <Route path="/preloaders" component={PreloadersPage}></Route>
        <Route path="/sliders" component={SlidersPage}></Route>
        <Route path="/paralaxes" component={ParalaxEffectsPage}></Route>
      </Router>
    </div>
  );
};

export default App;

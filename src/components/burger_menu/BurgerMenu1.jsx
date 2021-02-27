import React from "react";
import { Link } from "react-router-dom";

const MenuBurger1 = () => {
  return (
    <div className="menu__burger">
      <div className="bm-overlay"></div>
      <div>
        <div className="bm-burger-button">
          <button>
            <span>
              <div className="bm-burger-bars"></div>
              <div className="bm-morph-shape"></div>
            </span>
          </button>
        </div>
      </div>
      <div className="bm-menu-wrap">
        <div className="bm-menu">
          <nav className="bm-item-list">
            <li className="bm-item">
              <Link to="/">Home page</Link>
            </li>
            <li className="bm-item">
              <Link to="/bg">Backgrounds</Link>
            </li>
            <li className="bm-item">
              <Link to="/hover_borders">Hover Borders</Link>
            </li>
            <li className="bm-item">
              <Link to="/buttons">Buttons</Link>
            </li>
            <li className="bm-item">
              <Link to="/menu_burger">Menu Burger</Link>
            </li>
          </nav>
        </div>
        <div>
          <div className="bm-cross-button">
            <button />
            <span>
              <div className="bm-cross"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBurger1;

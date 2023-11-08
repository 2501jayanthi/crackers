import { withRouter, Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-content nav-bar-large-container">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link-mobile">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/customer" className="nav-link-mobile">
              Customer Details
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/products" className="nav-link-mobile">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-bar-img"
          />
        </li>

        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-bar-img"
          />
        </li>

        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-bar-img"
          />
        </li>
      </ul>
    </div>
  </nav>
);
export default withRouter(Header);

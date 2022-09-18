import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const userSignOut = () => {
    if (window.confirm("Do you want to sign out")) {
      signOut(auth);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="search the products here"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
          alt="search"
          className="header__searchIcon"
        />
      </div>

      <div className="header__nav">
        {user !== null ? (
          <div
            className="header__option profileFL"
            title="click to sign out"
            onClick={userSignOut}
          >
            <span>{user.email[0]}</span>
          </div>
        ) : (
          <Link to="/login" title="click here sign in">
            <div className="header__option">
              <span className="header__optionLineOne">Hello</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
        )}
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <img
              src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
              alt="cart"
              className="header__optionbasketIcon"
            />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

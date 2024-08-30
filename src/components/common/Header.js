import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlinePlusSquare,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { dropdownMenu } from "../../data/headerData";
import commonContext from "../../contexts/common/commonContext";
import cartContext from "../../contexts/cart/cartContext";
import AccountForm from "../form/AccountForm";
import SearchBar from "./SearchBar";
import Logo from "../../img/default.png";
// import AdminContext from './AdminContext';
import { count } from "../form/AccountForm";
import AdminContext from "./AdminContext";
import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const { formUserInfo, toggleForm, toggleSearch, adminCheck } =
    useContext(commonContext);
  const { cartItems } = useContext(cartContext);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const adminname = localStorage.getItem("Username");
  const [admin, setAdmin] = useState(false);

  // handle the sticky-header
  useEffect(() => {
    if (adminname === "" || adminname ===null) {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
    const handleIsSticky = () =>
      window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener("scroll", handleIsSticky);

    return () => {
      window.removeEventListener("scroll", handleIsSticky);
    };
  }, [isSticky]);
  const handleLogout = () => {
    // toggleForm();
    setAdmin("");
    localStorage.setItem("Username", "");
    // navigate("/");
    window.location.reload();
  };
  const cartQuantity = cartItems.length;

  return (
    <>
      <header id="header" className={isSticky ? "sticky" : ""}>
        <div className="container">
          <div className="navbar">
            <h2 className="nav_logo ">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              {/* <Link to="/">Sasta-Bazzar</Link> */}
            </h2>
            <nav className="nav_actions">
              {admin ? (
                <>
                  <div className="add_action ">
                    <Link to="/add_product">
                      <AiOutlinePlusSquare />
                    </Link>
                    <div className="tooltip">Add</div>
                  </div>
                </>
              ) : null}
              <div className="search_action">
                <span onClick={() => toggleSearch(true)}>
                  <AiOutlineSearch />
                </span>
                <div className="tooltip">Search</div>
              </div>

              <div className="cart_action ">
                <Link to="/cart">
                  <AiOutlineShoppingCart />
                  {cartQuantity > 0 && (
                    <span className="badge">{cartQuantity}</span>
                  )}
                </Link>
                <div className="tooltip">Cart</div>
              </div>

              {admin ? (
                <div className="user_action ">
                  <span>
                    <AiOutlineUser />
                  </span>
                  <div className="dropdown_menu glow-on-hover">
                    <h4>
                      Hy! {localStorage.getItem("Username")}{" "}
                      {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}
                    </h4>
                    <p>Access account and manage orders</p>
                    {!formUserInfo && (
                      <button type="button" onClick={handleLogout}>
                        Log Out
                      </button>
                    )}
                    <div className="separator"></div>
                    {/* <ul>
                      {dropdownMenu.map((item) => {
                        const { id, link, path } = item;
                        return (
                          <li key={id}>
                            <Link to={path}>{link}</Link>
                          </li>
                        );
                      })}
                    </ul> */}
                  </div>
                </div>
              ) : (
                <div className="user_action ">
                  <span>
                    <AiOutlineUser />
                  </span>
                  <div className="dropdown_menu glow-on-hover">
                    <h4>
                      Hy! {localStorage.getItem("Username")}{" "}
                      {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}
                    </h4>
                    <p>Access account and manage orders</p>
                    {!formUserInfo && (
                      <button type="button" onClick={() => toggleForm(true)}>
                        Login / Signup
                      </button>
                    )}
                    <div className="separator"></div>
                    <ul>
                      {dropdownMenu.map((item) => {
                        const { id, link, path } = item;
                        return (
                          <li key={id}>
                            <Link to={path}>{link}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      <SearchBar />
      <AccountForm />
    </>
  );
};

export default Header;

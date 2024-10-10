import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "../assets/images/home/logo.png";
import product from "../assets/images/cart/product-2.jpg";
import { varifyUser } from "../Functions/UserLogin";
import Dropdown from 'react-bootstrap/Dropdown';

import axios from "axios";
import { Email } from "@mui/icons-material";

const Header = (data) => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
  const [CategoryData, setCategoryData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/auth/list/CategoryMaster`
    );
    setCategoryData(res.data);
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [token, setToken] = useState("");
  const [Name, setName] = useState("");

  const [isOpen, setIsOpen] = useState(false); // Track dropdown open/close state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Alphabet",
      details: "Safaribags S2",
      quantity: 1,
      imgSrc: "../assets/images/cart/product-1.jpg",
    },
    {
      id: 2,
      name: "Rugby Ball",
      details: "Safaribags S11",
      quantity: 2,
      imgSrc: "../assets/images/cart/product-2.jpg",
    },
  ]);
  const [selectedOption, setSelectedOption] = useState("");

  // Handle the change event when user selects an option
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const cartTotalQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown state
  };

  const Email = localStorage.getItem("user");
  useEffect(() => {
    console.log(Email);
    EmailVerify()
  }, [Email]);
  

  const EmailVerify =()=>{
    if (Email) {
      varifyUser(Email)
        .then((response) => {
          console.log(response);
          const user = response.data; // Access the user data from response
          setUserData(user); // Do something with the user data
        })
        .catch((error) => {
          console.error("Error in user verification process:", error);
        });
    } else {
      console.log("No token found");
    }
  }

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");
  
    // Optionally, you can also clear all localStorage data if needed:
    // localStorage.clear();
  
    // Redirect to the login page ("/")
    window.location.href = "/";
  };
  

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <p className="welcome-msg">Welcome to Chanakya Corporate</p>
          </div>
          <div className="header-right">
            {userData.Email ? (
              <>
                
                <Dropdown>
                  <Dropdown.Toggle className="dropdownHader welcome-msg" id="dropdown-basic">
                  <span>Welcome, {userData.Name}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdownHaderMenu">
                    <Dropdown.Item href="/myAccount">My Account</Dropdown.Item>
                    <Dropdown.Item >
                     <button className="logoutBtn" onClick={handleLogout}>Logout</button>
                    </Dropdown.Item>
                   
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Link to="/" className="d-lg-show">
                    My Account

                  </Link> */}
              </>
            ) : (
              <>
                <Link to="/Login" className="d-lg-show login sign-in">
                  <i className="w-icon-account"></i> Sign In
                </Link>
                <span className="delimiter d-lg-show">/</span>
                <Link to="/SignUp" className="ml-0 d-lg-show login register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* End of Header Top */}
      <div className="header-middle sticky-content fix-top sticky-header border-no">
        <div className="container">
          <div className="header-left mr-md-4">
            <Link to="/" className="mobile-menu-toggle w-icon-hamburger"></Link>
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <form
              method="get"
              action="#"
              className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex"
            >
              <div className="select-box bg-white">
                <select id="category" name="category">
                  <option value="">All Price</option>
                  <option value="travel-bags">Under 100</option>
                  <option value="student-bags">Under 200</option>
                  <option value="kids-bags">Under 500</option>
                  <option value="camera-bags">Under 700</option>
                  <option value="men-essentials">Under 1000</option>
                  <option value="women-essentials">Under 2000</option>
                  <option value="winter-wear">Under 5000</option>
                  <option value="monsoon-wear">Above 5000</option>
                </select>
              </div>
              <input
                type="text"
                className="form-control bg-white pt-0 pb-0"
                name="search"
                id="search"
                placeholder="What are you looking for..."
                required
              />
              <button className="btn btn-search" type="button">
                <i className="w-icon-search"></i>
              </button>
            </form>
          </div>
          <div className="header-right ml-4">
            <div className="header-call d-xs-show d-lg-flex align-items-center">
              <Link to="tel:#" className="w-icon-call"></Link>
              <div className="call-info d-lg-show">
                <h4 className="chat font-size-md text-normal ls-normal text-white mb-0">
                  <Link
                    to="mailto:info@chanakya.com"
                    className="text-capitalize  font-weight-normal"
                    style={{ color: "#a01e20" }}
                  >
                    Live Chat
                  </Link>
                  <span className="text-light orTitle font-weight-normal">
                    or :
                  </span>
                </h4>
                <a
                  href="tel:#"
                  className="phone-number font-weight-bolder ls-50"
                >
                  +91(0000)000-0000
                </a>
              </div>
            </div>

            <div
              className={`dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2 ${
                isOpen ? "opened" : ""
              }`}
            >
              <div
                className={`cart-overlay ${isOpen ? "active" : ""}`}
                onClick={toggleDropdown}
              ></div>
              <a
                href="#"
                className="cart-toggle label-down link"
                onClick={toggleDropdown}
              >
                <i className="w-icon-cart">
                  <span className="cart-count text-white">
                    {userData.cart ? userData.cart.length : "0"}
                  </span>
                </i>
                <span className="cart-label">Cart</span>
              </a>
              {isOpen && (
                <div className="dropdown-box opened">
                  <div className="cart-header">
                    <span>Shopping Cart</span>
                    <a href="#" onClick={toggleDropdown}>
                      <span style={{ fontSize: "15px" }}> Close</span>{" "}
                      <i className="w-icon-long-arrow-right"></i>
                    </a>
                  </div>
                  <div className="products">
                    {cartItems.map((item) => (
                      <div className="product product-cart" key={item.id}>
                        <div className="product-detail">
                          <a href="#" className="product-name mb-0">
                            {item.name}
                          </a>
                          <p className="mb-0 mt-0 d-flex">
                            <small>{item.details}</small>
                          </p>
                          <div className="price-box">
                            <span className="product-quantity">
                              {item.quantity}
                            </span>
                            <span className="product-price">QTY</span>
                          </div>
                        </div>
                        <figure className="product-media">
                          <a href="#">
                            <img
                              src={product}
                              alt={item.name}
                              width="84"
                              height="94"
                            />
                          </a>
                        </figure>
                        <button
                          className="btn btn-link btn-close"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="cart-total">
                    <label>Subtotal:</label>
                    <span className="price">{cartTotalQuantity} QTY</span>
                  </div>
                  <div className="cart-action">
                    <a
                      href="#"
                      className="btn btn-dark btn-outline btn-rounded"
                    >
                      View Cart
                    </a>
                    <a href="#" className="btn btn-primary btn-rounded">
                      Checkout
                    </a>
                  </div>
                </div>
              )}
              {/* End of Dropdown Box */}
            </div>
          </div>
        </div>
      </div>
      {/* End of Header Middle */}
    </header>
  );
};

export default Header;

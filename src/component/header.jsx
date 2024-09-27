import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo from '../assets/images/home/logo.png'

const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <p className="welcome-msg">Welcome to Chanakya Corporate</p>
                    </div>
                    <div className="header-right">
                        <Link to="/" className="d-lg-show">My Account</Link>
                        <Link to="/" className="d-lg-show login sign-in">
                            <i className="w-icon-account"></i> Sign In
                        </Link>
                        <span className="delimiter d-lg-show">/</span>
                        <Link to="/" className="ml-0 d-lg-show login register">Register</Link>
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
                        <form method="get" action="#"
                            className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex">
                            <div className="select-box bg-white">
                                <select id="category" name="category">
                                    <option value="">All Categories</option>
                                    <option value="travel-bags">Travelling Bags</option>
                                    <option value="student-bags">Student Bags</option>
                                    <option value="kids-bags">Kids Bags</option>
                                    <option value="camera-bags">Camera Bags</option>
                                    <option value="men-essentials">Men Essentials</option>
                                    <option value="women-essentials">Women Essentials</option>
                                    <option value="winter-wear">Winter Wear</option>
                                    <option value="monsoon-wear">Monsoon Wear</option>
                                    <option value="thermoware">Thermoware</option>
                                </select>
                            </div>
                            <input type="text" className="form-control bg-white pt-0 pb-0" name="search" id="search"
                                placeholder="What are you looking for..." required />
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
                                    <a href="mailto:info@chanakya.com" className="text-capitalize text-primary font-weight-normal">
                                        Live Chat
                                    </a>
                                    <span className="text-light font-weight-normal">or :</span>
                                </h4>
                                <a href="tel:#" className="phone-number font-weight-bolder ls-50">+91(0000)000-0000</a>
                            </div>
                        </div>

                        <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                            <div className="cart-overlay"></div>
                            <Button className="cart-icon cart-toggle label-down link" onClick={()=>setShow(true)} >
                                <i className="w-icon-cart">
                                    <span className="cart-count text-white">2</span>
                                </i>
                                <span className="cart-label">Cart</span>
                            </Button>
                            {show &&
                            <div className="dropdown-box">
                                <div className="cart-header">
                                    <span>Shopping Cart</span>
                                    <Link to="#" className="btn-close">Close<i className="w-icon-long-arrow-right"></i></Link>
                                </div>
                                <div className="products">
                                    <div className="product product-cart">
                                        <div className="product-detail">
                                            <Link to="#" className="product-name mb-0">
                                                Alphabet
                                            </Link>
                                            <p className="mb-0 mt-0"><small>Safaribags S2</small></p>
                                            <div className="price-box">
                                                <span className="product-quantity">9</span>
                                                <span className="product-price">QTY</span>
                                            </div>
                                        </div>
                                        <figure className="product-media">
                                            <Link to="#">
                                                <img src="assets/images/main-home/product-details/01.jpg" alt="product" height="84" width="94" />
                                            </Link>
                                        </figure>
                                        <button className="btn btn-link btn-close">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <div className="product product-cart">
                                        <div className="product-detail">
                                            <Link to="#" className="product-name mb-0">
                                                Rugby Ball
                                            </Link>
                                            <p className="mb-0 mt-0"><small>Safaribags S11</small></p>
                                            <div className="price-box">
                                                <span className="product-quantity">10</span>
                                                <span className="product-price">QTY</span>
                                            </div>
                                        </div>
                                        <figure className="product-media">
                                            <Link to="#">
                                                <img src="assets/images/main-home/product-details/02.jpg" alt="product" width="84" height="94" />
                                            </Link>
                                        </figure>
                                        <button className="btn btn-link btn-close">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-total">
                                    <label>Subtotal:</label>
                                    <span className="price">19 QTY</span>
                                </div>
                                <div className="cart-action">
                                    <Link to="#" className="btn btn-dark btn-outline btn-rounded">View Cart</Link>
                                    <Link to="#" className="btn btn-primary btn-rounded">Checkout</Link>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Header Middle */}
        </header>
    );
};

export default Header;

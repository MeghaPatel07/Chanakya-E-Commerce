import React, { useState } from "react";
import xq from "../assets/images/home/products/p-01.jpg"
import xq1 from "../assets/images/home/products/p-02.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Thorium Neo 8 Wheels 55 Cm Small Cabin Trolley Bag Hard",
      brand: "Safari",
      category: "Travelling Bags",
      subCategory: "Suitcases",
      price: 3350,
      quantity: 1,
      image: xq,
    },
    {
      id: 2,
      name: "Safari Medium Trolley Bag",
      brand: "Urban Jungle",
      category: "Travelling Bags",
      subCategory: "Suitcases",
      price: 4350,
      quantity: 1,
      image: xq1, 
    },
  ]);

  // Update quantity for a specific cart item
  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedItems);
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  // Calculate the subtotal for a single item
  const calculateSubtotal = (item) => item.price * item.quantity;

  // Calculate the total for the entire cart
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);

  return (
    <main className="main login-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb shop-breadcrumb bb-no pt-2 pb-2">
            <li className="active">
              <Link to="#">Shopping Cart</Link>
            </li>
            <li>
              <Link to="#">Checkout</Link>
            </li>
            <li>
              <Link to="#">Order Complete</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="page-content wishlist-page pt-8 pb-8">
        <div className="container">
          <div className="row justify-content-center">
            {/* Cart Items */}
            <div className="col-md-12 col-lg-9">
              <table className="shop-table cart-table">
                <thead>
                  <tr>
                    <th
                      className="product-name text-center"
                      style={{ width: "10%" }}
                    >
                      <span>Image</span>
                    </th>
                    <th style={{ width: "45%" }}>Product Description</th>
                    <th
                      className="product-price text-center"
                      style={{ width: "10%" }}
                    >
                      <span>Price</span>
                    </th>
                    <th
                      className="product-quantity text-center"
                      style={{ width: "15%" }}
                    >
                      <span>Quantity</span>
                    </th>
                    <th className="product-subtotal" style={{ width: "10%" }}>
                      <span>Subtotal</span>
                    </th>
                    <th
                      className="wishlist-action text-center"
                      style={{ width: "10%" }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="product-thumbnail">
                        <div className="p-relative">
                          <Link to="#">
                            <figure>
                              <img
                                src={item.image}
                                alt="product"
                                width="300"
                                height="338"
                              />
                            </figure>
                          </Link>
                        </div>
                      </td>
                      <td className="product-name">
                        <Link to="#">
                          <span className="productname" style={{fontSize:"14px", fontWeight:"500"}}>{item.name}</span>
                          <ul className="product-desc row m-0 mb-1 pl-20">
                            <li className="col-md-12 p-0">
                              <strong>Brand :</strong> {item.brand}
                            </li>
                            <li className="col-md-12 p-0">
                              <strong>Category :</strong> {item.category}
                            </li>
                            <li className="col-md-12 p-0">
                              <strong>Sub Category :</strong> {item.subCategory}
                            </li>
                          </ul>
                        </Link>
                      </td>
                      <td className="product-price text-center">
                        <ins className="new-price">
                          <span
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                            }}
                          >
                            ₹
                          </span>{" "}
                          {item.price.toFixed(2)}
                        </ins>
                      </td>
                      <td className="product-quantity text-center">
                        <div className="input-group">
                          <input
                            className="quantity form-control"
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                          <button
                            className="quantity-plus w-icon-plus"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          ></button>
                          <button
                            className="quantity-minus w-icon-minus"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                          ></button>
                        </div>
                      </td>
                      <td className="product-subtotal text-center">
                        <span className="amount">
                          <span
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                            }}
                          >
                            ₹
                          </span>{" "}
                          {calculateSubtotal(item).toFixed(2)}
                        </span>
                      </td>
                      <td className="wishlist-action">
                        <div className="text-center">
                          <p>
                            <Link
                              to="#"
                              className="btn deleteBut btn-rounded btn-sm p-3 mt-2"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <i className="far fa-trash-alt" style={{fontSize:" 15px"}}></i>
                            </Link>
                          </p>
                          <p>
                            <Link
                              to="#"
                              className="btn seetBtn btn-primary btn-rounded btn-sm p-3"
                            >
                              <i className="far fa-eye"></i>
                            </Link>
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-action d-flex mt-6 mb-6">
                <Link
                  to="#"
                  className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"
                >
                  <i className="w-icon-long-arrow-left"></i>Continue Shopping
                </Link>
                <button
                  type="submit"
                  className="btn btn-rounded btn-default btn-clear"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="col-md-6 col-lg-3 sticky-sidebar-wrapper">
              <div className="sticky-sidebar">
                <div className="cart-summary mb-4">
                  <h3 className="cart-title d-flex text-uppercase">
                    Cart Totals
                  </h3>
                  <div className="cart-subtotal d-flex align-items-center justify-content-between">
                    <label className="ls-25">Subtotal</label>
                    <span>
                      <span
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        ₹
                      </span>{" "}
                      {calculateTotal().toFixed(2)}
                    </span>
                  </div>
                  <hr className="divider" />
                  <div className="order-total d-flex justify-content-between align-items-center">
                    <label>Total</label>
                    <span className="ls-50">
                      <span
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        ₹
                      </span>{" "}
                      {calculateTotal().toFixed(2)}
                    </span>
                  </div>
                  <Link
                    to="/checkOut"
                    className="btn btn-block btn-dark btn-icon-right btn-rounded btn-checkout mt-3 "
                  >
                    Proceed to checkout
                    <i className="w-icon-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;

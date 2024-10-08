import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main className="main login-page">
      {/* Start of Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb shop-breadcrumb bb-no pt-2 pb-2">
            <li>
              <Link to="#">Shopping Cart</Link>
            </li>
            <li className="active">
              <Link to="#">Checkout</Link>
            </li>
            <li>
              <Link to="#">Order Complete</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}

      {/* Start of PageContent */}
      <div className="page-content pt-10 pb-0">
        <div className="container">
          <form className="form checkout-form" action="#" method="post">
            <div className="row mb-9">
              <div className="col-lg-7 pr-lg-4 mb-4">
                <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                  Billing Details
                </h3>
                <div className="row gutter-sm">
                <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="companyName" className="d-flex">
                        Company name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        name="companyName"
                      />
                    </div>
                  </div>

                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="designation" className="d-flex">
                        Designation <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        name="designation"
                      />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="firstname" className="d-flex">
                        First name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        name="firstname"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="lastname" className="d-flex">
                        Last name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        name="lastname"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="email" className="d-flex">
                        Email Address<span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="companyEmail"  className="d-flex">
                        Company Email Address <span>*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-md"
                        name="companyEmail"
                        placeholder="optional"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="contactNo" className="d-flex">
                        Contact No. <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        name="contactNo"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="companyContactNo" className="d-flex">
                        Company Contact No. <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        name="companyContactNo"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="companyContactNo" className="d-flex">
                        Date.<span>*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-md"
                        name="companyContactNo"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="companyAddress" className="d-flex">
                        Company Address <span>*</span>
                      </label>
                      <textarea
                        className="form-control mb-0"
                        id="companyAddress"
                        name="companyAddress"
                        cols="30"
                        rows="4"
                        placeholder="Company Address"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-xs-12">
                    <div className="form-group">
                      <label htmlFor="remark" className="d-flex">
                        Remark <span>*</span>
                      </label>
                      <textarea
                        className="form-control mb-0"
                        id="remark"
                        name="remark"
                        cols="30"
                        rows="4"
                        placeholder="Notes about your order, e.g special notes for Order"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                <div className="order-summary-wrapper sticky-sidebar stciky-right-bar">
                  <h3 className="title text-uppercase ls-10">Your Order</h3>
                  <div className="order-summary">
                    <table className="order-table">
                      <thead>
                        <tr>
                          <th>
                            <b>Product Details</b>
                          </th>
                          <th>
                            <b>QTY</b>
                          </th>
                          <th>
                            <b>Price</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bb-no">
                          <td className="product-name d-flex">
                            Thorium Neo 8 Wheels 55 Cm Small Cabin Trolley Bag
                            Hard
                          </td>
                          <td>
                            <span className="product-quantity">10</span>
                          </td>
                          <td className="product-total">₹33,500.00</td>
                        </tr>
                        <tr className="bb-no">
                          <td className="product-name d-flex">
                            Safari Medium Trolley Bag
                          </td>
                          <td>
                            <span className="product-quantity">2</span>
                          </td>
                          <td className="product-total">₹6,900.00</td>
                        </tr>
                        <tr className="cart-subtotal bb-no">
                          <td className="d-flex">
                            <b>Total</b>
                          </td>
                          <td></td>
                          <td>
                            <b>₹40,400.00</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="form-group place-order pt-6">
                      <a
                        to="#emailVerify"
                        data-toggle="modal"
                        className="btn btn-dark btn-block btn-rounded"
                      >
                        Place Order
                      </a>
                      {/* <a to="order-complete.html" className="btn btn-dark btn-block btn-rounded">Place Order</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End of PageContent */}
    </main>
  );
};

export default CheckoutPage;

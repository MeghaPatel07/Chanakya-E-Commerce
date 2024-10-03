import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle,
  faArrowRight,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OrderCompletion = () => {
  // Assuming the order status can be "success" or "failed"
  const [orderStatus, setOrderStatus] = useState("success"); // Change this based on actual logic

  return (
    <main className="main login-page">
      {/* Start of Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb shop-breadcrumb bb-no pt-2 pb-2">
            <li>
              <Link to="#">Shopping Cart</Link>
            </li>
            <li>
              <Link to="#">Checkout</Link>
            </li>
            <li className="active">
              <Link to="#">Order Complete</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}

      {/* Start of PageContent */}
      <div className="page-content mb-10 pt-10 pb-2">
        <div className="container">
          <ul className="order-view list-style-none">
            <li>
              <label>Order number</label>
              <strong>CNKSEP24945</strong>
            </li>
            <li>
              <label>Status</label>
              <strong>
                {orderStatus === "success" ? "Success" : "Failed"}
              </strong>
            </li>
            <li>
              <label>Date</label>
              <strong>October 27, 2023</strong>
            </li>
            <li>
              <label>Total</label>
              <strong>₹40,400.00</strong>
            </li>
          </ul>

          <div className="row justify-content-center" id="thankyou-note">
            {orderStatus === "success" ? (
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                  <div className="card-body text-center">
                    <h3 className="mt-5 mb-5">
                      <span className="p-3 bg-green w-auto rounded-circle">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-white"
                        />
                      </span>
                    </h3>
                    <h3 className="text-green">Your inquiry was successful</h3>
                    <p>
                      Thank you for your inquiry. We will be in contact with
                      more details shortly.
                    </p>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-rounded btn-primary"
                        onClick={() => ( console.log("clicked"))}
                      >
                        <span className="btn-icon-left text-white">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="pr-1"
                          />
                        </span>
                        Continue Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                  <div className="card-body text-center">
                    <h3 className="mt-5 mb-5">
                      <span className="p-3 bg-danger w-auto rounded-circle">
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          className="text-white"
                        />
                      </span>
                    </h3>
                    <h3 className="text-danger">Oh no, your inquiry failed</h3>
                    <p>
                      Don't worry. We'll try your inquiry again over the next
                      few hours.
                    </p>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-rounded btn-danger"
                        onClick={() => (console.log("clicked"))}
                      >
                        <span className="btn-icon-left text-white">
                          <FontAwesomeIcon icon={faRedo} className="pr-1" />
                        </span>
                        Try Again
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <Link
              to="#"
              className="btn btn-primary btn-rounded btn-icon-left btn-back mt-6"
            >
              <FontAwesomeIcon icon="long-arrow-left" />
              Back To Home Page
            </Link>
          </div>
        </div>
      </div>
      {/* End of PageContent */}
    </main>
  );
};

export default OrderCompletion;

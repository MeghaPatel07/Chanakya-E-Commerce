import React from 'react'
import { Link } from 'react-router-dom'
import AccountSidbarDashboard from '../component/AccountSidbarDashboard'

const MyOrder = () => {
  return (
    <React.Fragment>
           <nav className="breadcrumb-nav">
  <div className="container">
    <ul className="breadcrumb">
      <li><Link to="/">Home</Link></li>
      <li>My account</li>
      <li>My Order</li>
    </ul>
  </div>
</nav>
<div className="page-content pt-6 pb-2 my-account">
  <div className="container">
    <div className="tab tab-vertical row gutter-lg">
      <AccountSidbarDashboard />
      <div className="tab-content mb-6">
        <div className="tab-pane mb-4 active in" id="account-orders">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon icon-orders">
              <i className="w-icon-orders" />
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title text-capitalize ls-normal mb-0" style={{fontSize: '2rem'}}>My Orders</h4>
            </div>
          </div>
          <div className="order-info">
            <h4 className="title title-password ls-25 font-weight-bold">Your Order Information Below.</h4>
            <hr />
            <div className="no-order mb-10">
              <h6 className="text-center">There is No Items In Your Order History</h6>
              <div className="text-center">
                <Link to="#" className="btn btn-dark btn-rounded">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
            <div className="table-responsive">
              <table className="shop-table account-orders-table mb-6">
                <thead>
                  <tr className="text-left">
                    <th className="order-id">Order #</th>
                    <th className="order-date">Ordered On</th>
                    <th className="order-status">Order Status</th>
                    <th className="order-total">Total</th>
                    <th className="order-actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="order-id">#2321</td>
                    <td className="order-date">Octomber 20, 2021</td>
                    <td className="order-status text-primary">Processing</td>
                    <td className="order-total">
                      <span className="order-price">₹6000.00</span>
                      {/*for
                              <span class="order-quantity"> 1</span> item*/}
                    </td>
                    <td className="order-action">
                      <Link to="#" className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="order-id">#2321</td>
                    <td className="order-date">Octomber 18, 2021</td>
                    <td className="order-status text-success">Successful</td>
                    <td className="order-total">
                      <span className="order-price">₹1500.00</span>
                      {/*for
                              <span class="order-quantity"> 1</span> item*/}
                    </td>
                    <td className="order-action">
                      <Link to="#" className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="order-id">#2319</td>
                    <td className="order-date">Octomber 03, 2021</td>
                    <td className="order-status text-danger">Fail</td>
                    <td className="order-total">
                      <span className="order-price">₹750.00</span>
                      {/*for
                              <span class="order-quantity"> 1</span> item*/}
                    </td>
                    <td className="order-action">
                      <Link to="#" className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="order-id">#2318</td>
                    <td className="order-date">Octomber 01, 2021</td>
                    <td className="order-status text-primary">Processing</td>
                    <td className="order-total">
                      <span className="order-price">₹900.00</span>
                      {/*for
                              <span class="order-quantity"> 1</span> item*/}
                    </td>
                    <td className="order-action">
                      <Link to="#" className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to="/" className="btn btn-dark btn-rounded btn-icon-right">
              Go
              To Home<i className="w-icon-long-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  )
}

export default MyOrder
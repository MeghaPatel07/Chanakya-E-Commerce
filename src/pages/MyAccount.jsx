import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import AccountSidbarDashboard from '../component/AccountSidbarDashboard'

const MyAccount = () => {
  return (
    <React.Fragment>
    <nav className="breadcrumb-nav">
  <div className="container">
    <ul className="breadcrumb">
      <li><Link to="/">Home</Link></li>
      <li>My account</li>
      <li>Account Detail</li>
    </ul>
  </div>
</nav>
<div className="page-content pt-6 pb-2 my-account">
  <div className="container">
    <div className="tab tab-vertical row gutter-lg">
     <AccountSidbarDashboard />
      <div className="tab-content mb-6">
        <div className="tab-pane active in" id="account-details">
          <div className="icon-box icon-box-side mb-6">
            <span className="icon-box-icon icon-account mr-2">
              <i className="w-icon-user" />
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title mb-0 ls-normal" style={{fontSize: '2rem'}}>Account Detail</h4>
            </div>
          </div>
          <div className="account-info" style={{}}>
            <h4 className="title title-password ls-25 font-weight-bold">Account Information</h4>
            <hr />
            <div className='informationDiv'>
              <h6 className="contact-information">Contact Information</h6>
              <p>Rushil Patel</p>
              <p>rushil@barodaweb.net | +91 9824281021</p>
              <p className="contact-info-link"><span><Link to="/myProfilel">Edit</Link></span> &nbsp; | &nbsp; <span><Link to="/myProfile">Change Password</Link></span></p>
            </div>
            <h4 className="title title-password ls-25 font-weight-bold mt-10">Address Book {/*<span><Link to="my-account-my-addresses.html">Manage Addresses</Link></span>*/}</h4>
            <hr />
            <Row className="informationDiv">
              <Col md={6} className=" mb-4">
                <h6 className="contact-information">Default Shipping Address</h6>
                <p>You have not set a default shipping address.</p>
                <p className="contact-info-link">
                  <Link to="my-addresses.html" className="btn btn-link btn-underline btn-icon-right editBtn">
                    Edit Address<i className="w-icon-long-arrow-right" />
                  </Link>
                </p>
              </Col>
              <Col md={6} className=" mb-4">
                <h6 className="contact-information">Default Billing Address</h6>
                <p>You have not set a default billing address.</p>
                <p className="contact-info-link">
                  <Link to="my-addresses.html" className="btn btn-link btn-underline btn-icon-right editBtn">
                    Edit Address<i className="w-icon-long-arrow-right" />
                  </Link>
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  )
}

export default MyAccount
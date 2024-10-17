import React from 'react'
import { Link } from 'react-router-dom'

const AccountSidbarDashboard = () => {


  return (
    <React.Fragment>
         <ul className="nav nav-tabs mb-6" role="tablist">
        <li className="nav-item">
          <h5 className="nav-link active account-dashboard">Account Dashboard</h5>
        </li>
        <li className="link-item">
          <Link to="/myAccount" className>My Account</Link>
        </li>
        <li className="link-item">
          <Link to="/myOrder" className>My Orders</Link>
        </li>
        <li className="link-item">
          <Link to="/myAddres" className>My Addresses</Link>
        </li>
        <li className="link-item">
          <Link to="/myProfile" className>My Profile</Link>
        </li>
        <li className="link-item">
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default AccountSidbarDashboard
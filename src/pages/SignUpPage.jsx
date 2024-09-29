import React, { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <main className="main login-page">
      {/* Start of Breadcrumb */}
      <nav className="breadcrumb-nav mb-10">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>Sign Up</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}

      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-popup signup-popup">
              <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <div className="text-center">
                  <h4 className="text-primary heading-sign">
                    Create your Account in Chanakya Corporate
                  </h4>
                </div>

                <div className="tab-content">
                  <div className="tab-pane active in" id="sign-in">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="form-group col-md-6 col-lg-4">
                          <label>Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-4">
                          <label>Email Address *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-4">
                          <label>Contact No *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group mb-0 col-md-6 col-lg-4">
                          <label>Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group mb-0 col-md-6 col-lg-4">
                          <label>Confirm Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <p className="mt-3">
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <a href="#" className="text-primary">
                          privacy policy
                        </a>
                        .
                      </p>

                      <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="agree"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="agree" className="font-size-md">
                          I agree to the{" "}
                          <a href="#" className="text-primary font-size-md">
                            privacy policy
                          </a>
                        </label>
                      </div>

                      <a type="submit" className="btn btn-primary">
                        Sign Up
                      </a>
                    </form>
                  </div>
                </div>

                <p>
                  Already have an account? <a href="sign-in.html">Sign In</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;

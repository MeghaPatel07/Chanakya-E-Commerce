import React, { useState } from "react";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorsEmail, setErrorsEmail] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    console.log(email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      toast.error("Please enter correct details");
      return;
    }

    // Prepare the data to send
    const values = {
      Email: email, // The email input from the user
      Password: password, // The password input from the user
    };



    // Sending the login request to the API
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/UserMasterLogin`, values)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data)
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.user._id);

          window.location.href = '/';

          // navigate("/"); // Redirect to the home page after successful login

        } else {
          toast.error(res.data.message || "Login failed. Please try again.");
        }
      })
      .catch((error) => {
        // Handle error response from API
        toast.error(
          "An error occurred: " +
          (error.response?.data.message || "Please try again.")
        );
      });
  };

  const [forgetPass, setForgetPass] = useState(false)
  const [forgetemail, setForgetEmail] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState('')
  const [sending , setSending] = useState(false)
  console.log(errorsEmail)
  const handleSendOtp = async () => {
    const newErrors={}
    if (!forgetemail) {
      newErrors.forgetemail = "Email is required.";
      
      return setErrorsEmail(newErrors);
    } else if (!validateEmail(forgetemail)) {
      newErrors.forgetemail = "Invalid email format.";
      return setErrorsEmail(newErrors);
    }
     
    try {
      setSending(true)
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/user/otp-forgetpassword-request`, { Email: forgetemail })
      console.log(res)
      if (res.data.isOk) {
        toast.success("Please Enter The OTP send to your email")
        setShowOtp(true)
        setSending(false)
      }
      else {
        setSending(false)
        toast.warning(res.data.message)
      }
    }
    catch (error) {
      setSending(false)
      console.log(error)

    }
  }

  return (
    <main className="main login-page">
      <ToastContainer /> {/* Toast notifications */}
      {/* Start of Breadcrumb */}
      <nav className="breadcrumb-nav mb-10">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-popup">
              {!forgetPass ?
                <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                  <div className="text-center">
                    <h4 className="loginTitle heading-sign">
                      Welcome to Chanakya Corporate, Sign into your Account
                    </h4>
                  </div>

                  <div className="tab-content">
                    <div className="tab-pane active in" id="sign-in">
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.email ? "is-invalid" : ""
                              }`}
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <small className="text-danger">{errors.email}</small>
                          )}
                        </div>

                        <div className="form-group mb-0">
                          <label htmlFor="password">Password *</label>
                          <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""
                              }`}
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {errors.password && (
                            <small className="text-danger">
                              {errors.password}
                            </small>
                          )}
                        </div>

                        {/* <div className="form-checkbox d-flex align-items-center justify-content-between">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="remember1"
                          name="remember1"
                         
                        />
                        <label htmlFor="remember1">Remember me</label>
                     
                      </div> */}
                        <div>
                          <button
                            className="button-none"
                            onClick={() => setForgetPass(true)} >Forgot Password?</button>
                        </div>

                        <button type="submit" className="btn loginBtn btn-primary">
                          Sign In
                        </button>
                      </form>
                    </div>
                  </div>


                  <p>
                    Don't have an account? <Link to="/signUp">Sign up</Link>
                  </p>
                </div>
                : <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                  <div className="text-center">
                    <h4 className="loginTitle heading-sign">
                      Forget Password
                    </h4>
                  </div>

                  <div className="tab-content">
                    <div className="tab-pane active in" id="sign-in">
                      <form >
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="text"
                            disabled={showOtp}
                            className={`form-control ${errorsEmail.forgetemail ? "is-invalid" : ""
                              }`}
                            name="forgetemail"
                            id="forgetemail"
                            value={forgetemail}
                            onChange={(e) => setForgetEmail(e.target.value)}
                          />
                          {errorsEmail.forgetemail && (
                            <small className="text-danger">{errorsEmail.forgetemail}</small>
                          )}
                        </div>
                        {
                          showOtp ? 
                          <div className="form-group">
                          <label htmlFor="otp">Enter OTP *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.otp ? "is-invalid" : ""
                              }`}
                            name="otp"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                          {errors.otp && (
                            <small className="text-danger">{errors.otp}</small>
                          )}
                        </div> :null
                        }
                        

                        <div>


                          <button
                          type="button"
                            className="button-none"
                            onClick={() => setForgetPass(false)} >Back TO Login</button>
                        </div>

                        <button type="button" onClick={handleSendOtp} className="btn loginBtn btn-primary">
                          {sending ? "Sending ..." : "Send Otp"}
                        </button>
                      </form>
                    </div>
                  </div>




                </div>}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;

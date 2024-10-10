import React, { useState } from "react";
import { createUserLogin } from "../Functions/UserLogin";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  Button,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation schema

const SignupPage = () => {
  const navigate = useNavigate();
  const [showOTP, setShowOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifyOTP, setVerifyOtp] = useState("");

  // Validation schema using Yup
  const SignupSchema = Yup.object().shape({
    Name: Yup.string().required("Name is required."),
    Email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    Mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits.")
      .required("Mobile number is required."),
    Password: Yup.string().required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("Password"), null], "Passwords must match")
      .required("Confirm Password is required."),
    agree: Yup.boolean().oneOf([true], "You must accept the privacy policy."),
  });

  // Handle OTP sending
  const sendOTP = async (Email, setFieldError) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/user/otp-signin-request`,
        { Email }
      );
      if (res.data.isOk) {
        setShowOtp(true);
        setOtp(res.data.otp);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error(res.data.message);
        setFieldError("Email", res.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  // Handle OTP verification
  const verify = (handleSubmit) => {
    const check = verifyOTP === otp;
    setIsLoading2(true);
    if (check) {
      toast.success("Thank you for registering");
      setIsLoading2(false);
      setTimeout(() => {
        handleSubmit();
      }, 2000);
    } else {
      setIsLoading2(false);
      toast.error("OTP does not match");
    }
  };

  return (
    <main className="main login-page">
      <ToastContainer />
      <nav className="breadcrumb-nav mb-10">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Sign Up</li>
          </ul>
        </div>
      </nav>

      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-popup signup-popup">
              <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <div className="text-center">
                  <h4 className="loginTitle heading-sign">
                    Create your Account in Chanakya Corporate
                  </h4>
                </div>

                <Formik
                  initialValues={{
                    Name: "",
                    Email: "",
                    Mobile: "",
                    Password: "",
                    confirmPassword: "",
                    agree: false,
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values, { setFieldError }) => {
                    sendOTP(values.Email, setFieldError);
                  }}
                >
                  {({ handleSubmit }) => (
                    <Form>
                      <div className="row">
                        <div className="form-group col-md-6 col-lg-4">
                          <label>Name *</label>
                          <Field
                            type="text"
                            name="Name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="Name"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-4">
                          <label>Email Address *</label>
                          <Field
                            type="text"
                            name="Email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="Email"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-4">
                          <label>Contact No *</label>
                          <Field
                            type="text"
                            name="Mobile"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="Mobile"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mb-0 col-md-6 col-lg-4">
                          <label>Password *</label>
                          <Field
                            type="password"
                            name="Password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="Password"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="form-group mb-0 col-md-6 col-lg-4">
                          <label>Confirm Password *</label>
                          <Field
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="error-message"
                          />
                        </div>
                      </div>

                      <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                        <Field
                          type="checkbox"
                          name="agree"
                          className="custom-checkbox"
                        />
                        <label htmlFor="agree" className="font-size-md">
                          I agree to the{" "}
                          <Link to="/" className="text-primary font-size-md">
                            privacy policy
                          </Link>
                        </label>
                        <ErrorMessage
                          name="agree"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <Button
                        className="btn-danger"
                        disabled={isLoading}
                        style={{
                          pointerEvents: isLoading ? "none" : "auto",
                        }}
                        onClick={() => handleSubmit()}
                      >
                        {isLoading ? "Processing" : "Sign Up"}
                      </Button>
                    </Form>
                  )}
                </Formik>

                <p>
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      <Modal isOpen={showOTP} size="sm">
        <ModalHeader
          className="p-3 modalHader"
          toggle={() => {
            setShowOtp(false);
          }}
        >
          Verify your OTP
        </ModalHeader>
        <form>
          <ModalBody>
            <Row>
              <Col lg={12}>
                <Label>Enter Otp sent to your Email</Label>
                <input
                  value={verifyOTP}
                  onChange={(e) => setVerifyOtp(e.target.value)}
                  className="otpInput"
                />
              </Col>
              <Col lg={12}>
              <div className="hstack otpDiv gap-2 justify-content-end">
              <button
                className="viewBtn"
                type="button"
                onClick={() => { verify() }}>
                {isLoading2 ? "Loading" : "Submit"}

              </button>


             
            </div>
              </Col>
            </Row>
          </ModalBody>
        </form>
      </Modal>
    </main>
  );
};

export default SignupPage;

import React from "react";
import { Link } from "react-router-dom";
import AccountSidbarDashboard from "../component/AccountSidbarDashboard";
import { Col, Row } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MyProFile = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email_1: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contactnumber: Yup.number()
      .required("Contact number is required")
      .typeError("Must be a number"),
    cur_password: Yup.string().required("Current password is required"),
    new_password: Yup.string()
      .required("New password is required")
      .min(6, "Password must be at least 6 characters"),
    conf_password: Yup.string()
      .oneOf([Yup.ref("new_password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  return (
    <React.Fragment>
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>My account</li>
            <li>My Profile</li>
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
                    <h4
                      className="icon-box-title mb-0 ls-normal"
                      style={{ fontSize: "2rem" }}
                    >
                      My Profile
                    </h4>
                  </div>
                </div>
                <div className="profile-info">
                  <h4 className="title title-password ls-25 font-weight-bold">
                    Account Information
                  </h4>
                  <hr />
                  <Formik
                    initialValues={{
                      firstname: "",
                      lastname: "",
                      email_1: "",
                      contactnumber: "",
                      cur_password: "",
                      new_password: "",
                      conf_password: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      // Handle form submission
                      console.log(values);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="form account-details-form">
                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label htmlFor="firstname">First name *</label>
                              <Field
                                type="text"
                                id="firstname"
                                name="firstname"
                                className="form-control form-control-md"
                              />
                              <ErrorMessage
                                name="firstname"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              <label htmlFor="lastname">Last name *</label>
                              <Field
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="form-control form-control-md"
                              />
                              <ErrorMessage
                                name="lastname"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label htmlFor="email_1">Email address *</label>
                              <Field
                                type="email"
                                id="email_1"
                                name="email_1"
                                className="form-control form-control-md"
                              />
                              <ErrorMessage
                                name="email_1"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              <label htmlFor="contactnumber">
                                Contact Number *
                              </label>
                              <Field
                                type="text"
                                id="contactnumber"
                                name="contactnumber"
                                className="form-control form-control-md"
                              />
                              <ErrorMessage
                                name="contactnumber"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </Col>
                        </Row>

                        <h4 className="title title-password ls-25 font-weight-bold mt-5">
                          Change Password
                        </h4>
                        <hr />

                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label htmlFor="cur-password">
                                Current Password *
                              </label>
                              <Field
                                type="password"
                                id="cur-password"
                                name="cur_password"
                                className="form-control form-control-md"
                              />
                              <ErrorMessage
                                name="cur_password"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="form-group">
                              <label htmlFor="new-password">
                                New Password *
                              </label>
                              <Field
                                type="password"
                                id="new-password"
                                name="new_password"
                                className="form-control form-control-md"
                              />
                              <ErrorMessage
                                name="new_password"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="form-group">
                              <label htmlFor="conf-password">
                                Confirm New Password *
                              </label>
                              <Field
                                type="password"
                                id="conf-password"
                                name="conf_password"
                                className="form-control form-control-md"
                              />
                              <ErrorMessage
                                name="conf_password"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </Col>
                        </Row>

                        <button
                          type="submit"
                          className="btn btn-dark btn-rounded btn-sm mb-4"
                          disabled={isSubmitting}
                        >
                          Save Changes
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyProFile;

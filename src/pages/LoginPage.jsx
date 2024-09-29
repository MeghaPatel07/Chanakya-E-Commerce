import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sign-in logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
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
            <li>Login</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}

      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-popup">
              <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <div className="text-center">
                  <h4 className="text-primary heading-sign">
                    Welcome to Chanakya Corporate Sign into your Account
                  </h4>
                </div>

                <div className="tab-content">
                  <div className="tab-pane active in" id="sign-in">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="username">
                          Username or email address *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group mb-0">
                        <label htmlFor="password">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-checkbox d-flex align-items-center justify-content-between">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="remember1"
                          name="remember1"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember1">Remember me</label>
                        <a href="forgot-password.html">Forgot Password?</a>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Sign In
                      </button>
                    </form>
                  </div>
                </div>

                <p>
                  Don't have an account? <a href="sign-up.html">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;

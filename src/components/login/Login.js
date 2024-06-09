import React, { useEffect, useState } from "react";
import "./Login.css";
// import Image from "../assets/image.png";
import Google_logo from "../../assets/Google_logo.jpeg";
import Logo from "../../assets/Logo.png";
// import Logo from "../../assets/Logo.png";
// import GoogleSvg from "../assets/icons8-google.svg";

// import { GoEyeClosed, GoEye } from "react-icons/go";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // <>
    //   <div className="d-flex flex-column vh-100">
    //     <nav className="navbar navbar-light bg-light shadow">
    //       <a className="navbar-brand" href="#">
    //         techeefy.com
    //       </a>
    //     </nav>
    //     <div className="d-flex justify-content-center align-items-center flex-grow-1 description ">
    //       <div className="row w-100">
    //         <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
    //           <h1>
    //             Education Management System
    //             <br />
    //             <span className="text">for your institute</span>
    //           </h1>
    //           <p className="lead">
    //             Welcome to our Education Management System! Seamlessly integrate
    //             ERP, LMS, and attendance monitoring to streamline administrative
    //             tasks and enhance the learning experience. Login now!
    //           </p>
    //         </div>
    //         <div className="col-md-6 d-flex justify-content-center">
    //           <div className="card">
    //             <div className="card-body">
    //               <form>
    /* <div className="form-group mb-3">
                      <div
                        className="btn-group d-flex w-100"
                        role="group"
                        aria-label="User type"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="userType"
                          id="teacher"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-outline-primary w-50"
                          htmlFor="teacher"
                        >
                          Teacher
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="userType"
                          id="admin"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-primary w-50"
                          htmlFor="admin"
                        >
                          Admin
                        </label>
                      </div>   
                    </div> */
    //                 <h4 className="text-center mb-4">Welcome back!!</h4>
    //                 <div className="form-group mb-3">
    //                   <label htmlFor="username">Username</label>
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     id="username"
    //                   />
    //                 </div>
    //                 <div className="form-group mb-3">
    //                   <label htmlFor="password">Password</label>
    //                   <input
    //                     type={showPassword ? "text" : "password"}
    //                     className="form-control"
    //                     id="password"
    //                   />
    //                 </div>
    //                 <div className="form-check mb-3">
    //                   <input
    //                     type="checkbox"
    //                     checked={showPassword}
    //                     onChange={() => {
    //                       setShowPassword(!showPassword);
    //                     }}
    //                     className="form-check-input"
    //                     id="rememberMe"
    //                   />
    //                   <label className="form-check-label" htmlFor="rememberMe">
    //                     Show password
    //                   </label>
    //                 </div>
    //                 <button type="submit" className="btn btn-primary w-30">
    //                   Sign in
    //                 </button>
    //               </form>
    //               <div className="mt-3 ">
    //                 <a href="#" style={{ color: " #6C757D" }}>
    //                   Forgot password?
    //                 </a>
    //               </div>
    //               <div className="mt-2">
    //                 <span>
    //                   Don't have an account? <a href="#">Register here</a>
    //                 </span>
    //               </div>
    //               <div className="copyright">
    //                 <div>
    //                   Powered by
    //                   <br />
    //                   techeefy.com
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 min-vw-100 parent-container">
        {/*--------------------- Login Container ------------------------*/}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/*------------------------- Left Box ---------------------------*/}
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "#103cbe" }}
          >
            <div className="featured-image mb-3">
              <img src={Logo} className="img-fluid" style={{ width: 250 }} />
            </div>
            <p
              className="text-white fs-2"
              style={{
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: 600,
              }}
            >
              ERP
            </p>
            <small
              className="text-white text-wrap text-center"
              style={{
                width: "17rem",
                fontFamily: '"Courier New", Courier, monospace',
              }}
            >
              Join us for getting your Management work faster.
            </small>
          </div>
          {/*------------------ ------ Right Box --------------------------*/}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Welcome back!!</h2>
                <p>We are happy to have you back.</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                    onChange={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Show password</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#">Forgot Password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img
                    src={Google_logo}
                    style={{ width: 20 }}
                    className="me-2"
                  />
                  <small>Sign In with Google</small>
                </button>
              </div>
              <div className="row">
                <small>
                  Don't have account? <a href="#">Contact Us</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

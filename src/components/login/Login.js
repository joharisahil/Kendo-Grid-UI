import React, { useEffect, useState } from "react";
import "./Login.css";
// import Image from "../assets/image.png";
// import ERP_New from "../../assets/ERP_New.png";
// import Logo from "../../assets/Logo.png";
// import GoogleSvg from "../assets/icons8-google.svg";

// import { GoEyeClosed, GoEye } from "react-icons/go";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // <div className="login-main">
    //   <div className="login-left">
    //     <img src={Logo} alt="Logo" />
    //   </div>
    //   <div className="login-right">
    //     <div className="login-right-container">
    //       <div className="login-logo">
    //         <img src={ERP_New} alt="ERP_New" />
    //       </div>
    //       <div className="login-center">
    //         <h2>Welcome back!</h2>
    //         <p>Please enter your details</p>
    //         <form>
    //           <input
    //             type="email"
    //             placeholder="Email"
    //             style={{ fontSize: "20px" }}
    //           />
    //           <div className="pass-input-div">
    //             <input
    //               type={showPassword ? "text" : "password"}
    //               placeholder="Password"
    //               style={{ fontSize: "20px" }}
    //             />
    //             {showPassword ? (
    //               <FaRegEyeSlash
    //                 onClick={() => {
    //                   setShowPassword(!showPassword);
    //                 }}
    //               />
    //             ) : (
    //               <FaRegEye
    //                 onClick={() => {
    //                   setShowPassword(!showPassword);
    //                 }}
    //               />
    //             )}
    //           </div>

    //           <div className="login-center-options">
    //             <div className="remember-div">
    //               <input type="checkbox" id="remember-checkbox" />
    //               <label htmlFor="remember-checkbox">Remember me</label>
    //             </div>
    //             <a href="#" className="forgot-pass-link">
    //               Forgot password?
    //             </a>
    //           </div>
    //           <div className="login-center-buttons">
    //             <button type="button">Log In</button>
    //             {/* <button type="button">
    //               <img src="https://via.placeholder.com/150" alt="" />
    //               Log In with Google
    //             </button> */}
    //           </div>
    //         </form>
    //       </div>

    //       {/* <p className="login-bottom-p">
    //         Don't have an account? <a href="#">Sign Up</a>
    //       </p> */}
    //       <p className="login-bottom-p">
    //         Powered by
    //         <p>techeefy.com</p>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="d-flex flex-column vh-100">
        <nav className="navbar navbar-light bg-light shadow">
          <a className="navbar-brand" href="#">
            techeefy.com
          </a>
        </nav>
        <div className="d-flex justify-content-center align-items-center flex-grow-1 description ">
          <div className="row w-100">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
              <h1>
                Education Management System
                <br />
                <span className="text">for your institute</span>
              </h1>
              <p className="lead">
                Welcome to our Education Management System! Seamlessly integrate
                ERP, LMS, and attendance monitoring to streamline administrative
                tasks and enhance the learning experience. Login now!
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <form>
                    {/* <div className="form-group mb-3">
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
                    </div> */}
                    <h4 className="text-center mb-4">Welcome back!!</h4>
                    <div className="form-group mb-3">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="password"
                      />
                    </div>
                    <div className="form-check mb-3">
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => {
                          setShowPassword(!showPassword);
                        }}
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Show password
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-30">
                      Sign in
                    </button>
                  </form>
                  <div className="mt-3 ">
                    <a href="#" style={{ color: " #6C757D" }}>
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <span>
                      Don't have an account? <a href="#">Register here</a>
                    </span>
                  </div>
                  <div className="copyright">
                    <div>
                      Powered by
                      <br />
                      techeefy.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

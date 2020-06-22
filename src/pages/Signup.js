import React, { useState } from "react";
import { Link } from "react-router-dom";
import userService from "../services/userService";

export default function Signup() {
  const [input, setInput] = useState({});

  const handleFormInput = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      [event.target.name]: event.target.value,
    }));
  };

  const togglepasswordvisibility = () => {
    let attrval = document.getElementById("password").getAttribute("type");
    if (attrval === "password") {
      document.getElementById("password").setAttribute("type", "text");
    } else {
      document.getElementById("password").setAttribute("type", "password");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    userService.register(input);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 login_image"></div>
        <div className="col-12 col-md-6 px-4">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <img className="img-fluid" src="/logo.svg" alt="logo" />
              </Link>
            </li>
            <li className="nav-item ml-auto mt-2">
              <Link className="nav-link" to="/about-us">
                ABOUT
              </Link>
            </li>
          </ul>
          <div className="row">
            <div className="col-8 ml-3 mt-5">
              <span className="h1 d-block font-weight-bold">Welcome</span>
              <span className="h4 d-block text_gray font-weight-bold">
                We are Ready to Entertain You
              </span>
            </div>
            <div className="col-12 mt-5">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group col-8 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={handleFormInput}
                    id="email"
                  />
                </div>
                <div className="form-group col-8 mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleFormInput}
                    id="password"
                  />
                  <div
                    className="showpassword"
                    onClick={togglepasswordvisibility}
                  ></div>
                </div>
                <div className="form-group col-8 mb-4">
                  <label htmlFor="retypePassword">Re-type Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="retypepassword"
                    onChange={handleFormInput}
                    id="retypepassword"
                  />
                  <div
                    className="showpassword"
                    onClick={togglepasswordvisibility}
                  ></div>
                </div>
                <div className="col-12">
                  <Link to="/login">
                    <button className="btn btn-default text-orangered ml-5">
                      <span>
                        <svg
                          version="1.1"
                          id="Capa_1"
                          height="60"
                          width="30"
                          fill="orangered"
                          xmlns="http://www.w3.org/2000/svg"
                          xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          space="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068
                        l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
                        l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
                        c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                              />
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                      </span>
                      Sign In
                    </button>
                  </Link>
                  <button type="submit" className="btn btn-orange px-5 ml-5">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

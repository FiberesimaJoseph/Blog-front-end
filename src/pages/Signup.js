import React, { useState } from "react";

export default function Signup() {
  const [input, setInput] = useState({});

  const handleFormInput = (e) => {
    e.persist();
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const togglepasswordvisibility = () => {
    let attrval = document.getElementById("password").getAttribute("type");
    if (attrval === "password") {
      document.getElementById("password").setAttribute("type", "text");
    } else {
      document.getElementById("password").setAttribute("type", "password");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 login_image"></div>
        <div className="col-12 col-md-6 px-4">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#s">
                <img className="img-fluid" src="/logo.svg" alt="logo" />
              </a>
            </li>
            <li className="nav-item ml-auto mt-2">
              <a className="nav-link" href="/about">
                ABOUT US
              </a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href="/support">
                SUPPORT
              </a>
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
                  <label htmlFor="firstName">firstName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="firstName"
                    name="firstName"
                    onChange={handleFormInput}
                    id="firstName"
                  />
                </div>
                <div className="form-group col-8 mb-4">
                  <label htmlFor="lastName">lastName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="lastName"
                    name="lastName"
                    onChange={handleFormInput}
                    id="lastName"
                  />
                </div>
                <div className="form-group col-8 mb-4">
                  <label htmlFor="phone">phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="phone"
                    name="phone"
                    onChange={handleFormInput}
                    id="phone"
                  />
                </div>

                <div className="form-group col-8 mb-4">
                  <label htmlFor="userName">userName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="userName"
                    name="userName"
                    onChange={handleFormInput}
                    id="userName"
                  />
                </div>
                <div className="form-group col-8 mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    onChange={handleFormInput}
                    id="password"
                  />
                  <div
                    className="showpassword"
                    onClick={togglepasswordvisibility}
                  ></div>
                </div>
                <div className="form-group col-8 mb-4">
                  <label htmlFor="retypePassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="retypepassword"
                    placeholder="retypepassword"
                    onChange={handleFormInput}
                    id="retypepassword"
                  />
                  <div
                    className="showpassword"
                    onClick={togglepasswordvisibility}
                  ></div>
                </div>
                <div className="col-12">
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
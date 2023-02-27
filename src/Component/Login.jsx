import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState(false);

  const readValue = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("Insert data:-", loginUser);
    let getData = JSON.parse(localStorage.getItem("Register"));
    const { email, password } = getData;

    if (email === loginUser.email && password === loginUser.password) {
      setButtonStatus(true);
      toast.success("Login Successfully");
      setButtonStatus(false);
      localStorage.setItem("Login", email);

      window.location.assign("/Dashboard");

      // Navigate("/Movie");
    } else {
      toast.error("Invalid Credentials");
    }
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-3 col-md-6 my-2">
          <div className="card">
            <div className="card-header text-center">
              <b>Login</b>
            </div>
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="input-group my-3 ">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    onChange={readValue}
                    value={loginUser.email}
                    required
                  />
                </div>

                <div className="input-group my-3 ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    onChange={readValue}
                    value={loginUser.password}
                    required
                  />
                </div>

                <div className="input-group my-3 d-flex justify-content-center">
                  <button
                    disabled={buttonStatus}
                    type="submit"
                    className="btn btn-primary "
                  >
                    <i className="bi bi-door-open-fill mx-1"></i> Login
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

export default Login;
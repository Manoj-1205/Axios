import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const mailFormat = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";

  const [Formdata, setFormdata] = useState(initialState);
  const [FormError, setFormError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...Formdata, [name]: value });
    console.log(JSON.stringify(Formdata)); //Debugger
  };
  const handleReset = () => {
    setFormdata({ username: "", email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(Formdata));
    setisSubmit(true);
  };

  const validate = (data) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data.username) {
      errors.username = "Username is required!";
    }
    if (!data.email) {
      errors.email = "Emailid is required!";
    } else if (!regex.test(data.email)) {
      errors.email = "Not valid email format";
    }
    if (!data.password) {
      errors.password = "Password is required!";
    } else if (data.password.length < 4) {
      errors.password = "Password length should be above 3 characters";
    } else if (data.password.length > 10) {
      errors.password = "Password length should be below 10 characters";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(FormError).length === 0 && isSubmit) {
      navigate("/api");
    }
  }, [FormError]);
  return (
    <body>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="container">
            <input
              type="text"
              placeholder="Username"
              className="inp"
              name="username"
              value={Formdata.username}
              onChange={handleChange}
            />
            <span className="error">{FormError.username}</span>
            <br />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="inp"
              name="email"
              value={Formdata.email}
              onChange={handleChange}
            />
            <span className="error">{FormError.email}</span>
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="inp"
              name="password"
              value={Formdata.password}
              onChange={handleChange}
            />
            <span className="error">{FormError.password}</span>
            <br />
            <br />
            <button type="submit" className="but">
              Submit
            </button>
            &nbsp;&nbsp;
            <button type="reset" className="but" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};
/*
 <button type="reset" className="but" onClick={handleReset}>
              Reset
            </button>
*/
export default LoginForm;

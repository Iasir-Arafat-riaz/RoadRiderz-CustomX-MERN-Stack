import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import "./Register.css"

const Register = () => {
  const [userRegister, setUserRegister] = useState({});
  const { registerUser, user, isLoading, error } = useAuth();
  console.log(user);

  const history = useHistory();

  const registerInput = (e) => {
    // console.log(e.target.value);
    const name = e.target.name;
    const fieldValue = e.target.value;

    const signInUser = { ...userRegister };
    signInUser[name] = fieldValue;
    setUserRegister(signInUser);
  };

  // console.log(userRegister);
  const registeration = (e) => {
    e.preventDefault();
    // console.log(userRegister);
    if (userRegister.password !== userRegister.password2) {
      alert("password not matched");
      return;
    }
    registerUser(
      userRegister.email,
      userRegister.password,
      userRegister.displayName,
      history
    );
    // setUserRegister({})
    setUserRegister({});
  };

  

  return (
    <div className="register-section">
      <div className="row">
        <div className="col-md-5 col-sm-12 col-12">
          <div className="register-input">
          <h3>Please Register Now</h3>
          <h6 className="text-danger">
            <b>{error}</b>
          </h6>
          {!isLoading && (
            <form onSubmit={registeration} action="">
              <input
              placeholder="Enter Your Name"
                required
                onBlur={registerInput}
                type="text"
                name="displayName"
                id=""
              />
              <br />
              <input
               placeholder="Enter Your Email"
                required
                name="email"
                type="email"
                onBlur={registerInput}
              />
              <br />
              <input
               placeholder="Type Your Password"
                required
                onBlur={registerInput}
                type="password"
                name="password"
                id=""
              />
              <br />
              <input
              placeholder="Re-Type Your Password"
                required
                onBlur={registerInput}
                type="password"
                name="password2"
                id=""
              />
              <br />
              <input className="register-submit" type="submit" value="Register" />
            </form>
          )}
          {isLoading && <Spinner animation="border" variant="info" />}
            
            ----------------------


           <h5>Already Registerd?</h5>
           <Link className="regLink" to="/login"><h3><b>Click Here for LOGIN</b></h3></Link>

          
          </div>
        </div>
        <div className="col-md-5 col-sm-12 col-12">

        </div>
      </div>
    </div>
  );
};

export default Register;

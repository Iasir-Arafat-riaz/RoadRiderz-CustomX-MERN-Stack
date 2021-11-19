import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link,useHistory,useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import "./Login.css"

const Login = () => {
  const [userLoggedIn,setUserLoggedIn]=useState({})
  const { googleSignIn, user,visitorLogIn,error } = useAuth()
  console.log(user);

  
//react hook useHistory
const history=useHistory()
const location =useLocation()

// console.log(location.state.from)

  const loginInput=(e)=>{
    console.log(e.target.value)
    const name =e.target.name;
    const fieldValue= e.target.value;

    const signInUser ={...userLoggedIn}
    signInUser[name]=fieldValue;
    setUserLoggedIn(signInUser)

  }
  console.log(userLoggedIn)
  const userLogin=(e)=>{

    visitorLogIn(userLoggedIn.email,userLoggedIn.password,history,location)
    
    e.preventDefault()
  }
  return (
    <div className="login-section">
      <h2 className="common-header">Please Login </h2>
      <h6 className="text-danger">
            <b>{error}</b>
          </h6>
      <form onSubmit={userLogin} action="">
      <input placeholder="Enter Your Email" name="email" type="email" onBlur={loginInput} />
      <br/>
      <input placeholder="Enter Your Password" onBlur={loginInput} type="password" name="password" id="" />
      <br/>
      <input type="submit" value="login" className="login-button" />
      </form>

      <Button onClick={()=>googleSignIn(history,location)} variant="info">
        Login with google
      </Button>
<br/>
<br/>
      <h3>New user? just click below </h3>
      <Link to="/register"><h4>Please register</h4></Link>
    </div>
  );
};

export default Login;

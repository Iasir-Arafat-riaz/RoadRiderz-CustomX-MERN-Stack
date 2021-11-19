import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const goToHome = () => {
    history.push("/home");
  };
  // const headerLoginButton=()=>{

  // }
  return (
    <div>
      <div className="text-center">
      
        <h1 onClick={goToHome} className="company-name ">
        <img src="https://i.ibb.co/bvqWj1W/476283-328848950575157-448717599-o-removebg-preview-1.png" alt=""/>
         
          <b>RoadRiderz Custom X</b>
          
        </h1>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="text-center"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Navbar.Brand>
                  <NavLink
                     to="/home"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "goldenRod",
                    }}
                   
                    className="header-link"
                  >
                    <b>Home</b>
                  </NavLink>
                </Navbar.Brand>


                <Navbar.Brand>
                  {""}
                  <NavLink
                    to="/Xplore"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "goldenRod",
                    }}
                    
                    className="header-link"
                  >
                   <b>Explore</b>
                  </NavLink>
                </Navbar.Brand>


                <Navbar.Brand>
                  {""}
                  <NavLink
                    to="/dashboard"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "goldenRod",
                    }}
                    
                    className="header-link"
                  >
                    {user.email&&<b>Dashboard</b>}
                  </NavLink>
                </Navbar.Brand>

                <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/falcon"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "goldenRod",
                    }}
                    
                    className="header-link"
                  >
                    <b>RRz Falcon</b>
                  </NavLink>
                </Navbar.Brand>
               
                <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/stunt"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "goldenRod",
                    }}
                    
                    className="header-link"
                  >
                    <b>Stunt Team </b>
                  </NavLink>
                </Navbar.Brand>

                <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/AboutUs"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "goldenRod",
                    }}
                    
                    className="header-link"
                  >
                    <b>About Us</b>
                  </NavLink>
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
            {user.email && (
              <img className="header-img" src={user.photoURL} alt="" />
            )}
            {user.email && (
              <span className="text-light mx-1">{user?.displayName}</span>
            )}
            {user.email ? (
              <button onClick={logout} className="btn btn-warning">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-success">Login</button>
              </Link>
            )}
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;

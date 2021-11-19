import React from "react";
import "./Dashboard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import PaymentNow from "../PaymentNow/PaymentNow";
import Review from "../Review/Review";
import DashboardDefault from "../DashboardDefault/DashboardDefault";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import { useAuth } from "../../../hooks/useAuth";
import PrivateAdmin from "../../../private/PrivateAdmin/PrivateAdmin";
import PrivateUser from "../../../private/PrivateUser/PrivateUser";
import SinglePayment from "../../SinglePayment/SiglePayment";

const DashBoard = () => {
  let { path, url } = useRouteMatch();
  console.log(path);
  const { logout, admin } = useAuth();
  console.log(admin);
  return (
    <div>
      <div className="row">
        <div className="col-md-3 col-sm-4 dashboardNavigation ">
          <h2 className="">Dashbord</h2>
          {!admin && (
            <span>
              {" "}
              <Link to={`${url}/MyOrders`}>
                <b> My Orders</b>
              </Link>
            </span>
          )}

          {!admin && (
            <span>
              {" "}
              <Link to={`${url}/Review`}>
                {" "}
                <b>Review</b>
              </Link>
            </span>
          )}

          {!admin && (
            <span>
              {" "}
              <Link to={`${url}/Payment`}>
                {" "}
                <b>Payment Now</b>
              </Link>
            </span>
          )}

          {admin && (
            <span>
              <Link to={`${url}/ManageOrders`}>
                <b>Manage All Orders</b>
              </Link>
            </span>
          )}

          {admin && (
            <span>
              {" "}
              <Link to={`${url}/AddProduct`}>
                {" "}
                <b>Add New Product</b>
              </Link>
            </span>
          )}

          {admin && (
            <span>
              {" "}
              <Link to={`${url}/MakeAdmin`}>
                {" "}
                <b>Make New ADMIN</b>
              </Link>
            </span>
          )}

          {admin && (
            <span>
              {" "}
              <Link to={`${url}/ManageProducts`}>
                {" "}
                <b>Manage Products</b>
              </Link>
            </span>
          )}

          <button onClick={logout} className="dashBoard-logout">
            <b>Logout Now</b>
          </button>
        </div>
        <div className="col-md-9 col-sm-8">
          {/* <h3>here is details</h3> */}
          <Switch>
            <Route exact path={path}>
              <DashboardDefault></DashboardDefault>
            </Route>
            <Route exact path={`${path}/MyOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/MyOrders/:id`}>
              <SinglePayment></SinglePayment>
            </Route>
            <Route path={`${path}/Review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/Payment`}>
              <PaymentNow></PaymentNow>
            </Route>
            <PrivateAdmin path={`${path}/ManageOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </PrivateAdmin>
            <PrivateAdmin path={`${path}/AddProduct`}>
              <AddProduct></AddProduct>
            </PrivateAdmin>
            <PrivateAdmin path={`${path}/MakeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </PrivateAdmin>
            <PrivateAdmin path={`${path}/ManageProducts`}>
              <ManageProducts></ManageProducts>
            </PrivateAdmin>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

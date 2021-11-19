import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Signin/Login/Login";
import Register from "./pages/Signin/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/shared/Header/Header";
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import AuthProvider from "./ContextAPI/AuthProvider";
import AboutUs from "./pages/AboutUs/AboutUs";
import Explore from "./pages/Explore/Explore";
import Purchase from "./pages/Purchase/Purchase";
import PrivateRoute from "./private/PrivateRoute/PrivateRoute";
import Footer from "./pages/shared/Footer/Footer";
import Falcon from "./pages/Falcon/Falcon";
import Stunt from "./pages/Stunt/Stunt";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/Xplore">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/falcon">
            <Falcon></Falcon>
          </Route>
          <Route path="/stunt">
            <Stunt></Stunt>
          </Route>
          <Route path="/AboutUs">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;



//---------Thanks to you fo your time and support------------------- 

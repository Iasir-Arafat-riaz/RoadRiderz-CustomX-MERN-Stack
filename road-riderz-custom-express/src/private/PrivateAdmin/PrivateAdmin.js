import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
// import { useAuth } from '../../hooks/useAuth';

const PrivateAdmin = ({children,...rest}) => {
    const {user,isLoading,admin}=useAuth()
console.log(isLoading,user.email,admin);
    if(!admin){return <div>
      <h4 style={{color:"red"}}>Please wait few second....</h4> 
      <Spinner animation="border" variant="danger" />
    </div> }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateAdmin;
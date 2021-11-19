import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const PrivateUser = ({children,...rest}) => {
    const {user,isLoading,admin}=useAuth()

    if(isLoading){return <div>
      <h4 style={{color:"red"}}>Please wait few second....</h4> 
      <Spinner animation="border" variant="danger" />
    </div> }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.email && !admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateUser;
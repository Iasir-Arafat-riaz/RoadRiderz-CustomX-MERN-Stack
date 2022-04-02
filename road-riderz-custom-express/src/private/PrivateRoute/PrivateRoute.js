import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import Loading from "../../pages/shared/Loading/Loading";

const PrivateRoute = ({ children, ...remaining }) => {
  const { user, isLoading } = useAuth();
  console.log(isLoading, user.email, user.displayName);
  if (isLoading) {
    return (
     <Loading/>
    );
  }
  return (
    <Route
      {...remaining}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

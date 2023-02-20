import { Route, Redirect } from "react-router-dom" 

const PrivateRoute = ({ currentUser, component, ...rest }) => {
  return (
    <Route
        {...rest}
        render={({ location }) => (
            currentUser.isAuthenticated ? ( component ) : (<Redirect to={{ pathname: "/", state: {from: location}}} />)
  )}
    />
  )
}

export default PrivateRoute

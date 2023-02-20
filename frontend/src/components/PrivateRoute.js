import { Route, Redirect } from "react-router-dom" 

const PrivateRoute = ({ component, currentUser, ...rest }) => {
  return (
    <Route
        {...rest}
        render={({ location }) => {
            return !currentUser.isAuthenticated ? ( component ) : (<Redirect to={{ pathname: "/", state: {from: location}}} />)
        }}
    >
    </Route>
  )
}

export default PrivateRoute

import { Route, Redirect } from "react-router-dom" 

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
        {...rest}
        render={({ location }) => {
            return !isAuthenticated ? ( children ) : (<Redirect to={{ pathname: "/login", state: {from: location}}} />)
        }}
    >
    </Route>
  )
}

export default PrivateRoute

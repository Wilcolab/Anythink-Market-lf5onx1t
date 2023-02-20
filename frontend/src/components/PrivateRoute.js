import { Route, Redirect } from "react-router-dom" 

const PrivateRoute = ({ currentUser, component }) => {
  return (
    <Route
        render={({ location }) => (
            currentUser?.isAuthenticated ? ( component() ) : (<Redirect to="/" />)
  )}
    />
  )
}

export default PrivateRoute

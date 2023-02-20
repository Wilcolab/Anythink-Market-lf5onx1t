import { Route, Redirect } from "react-router-dom" 

const PrivateRoute = ({ currentUser, component }) => {
  return (
    <Route
        render={() => (
            currentUser?.isAuthenticated ? ( component() ) : (<Redirect to="/" />)
  )}
    />
  )
}

export default PrivateRoute

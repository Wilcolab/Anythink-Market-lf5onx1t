import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
        <div className="container">
            <h1 className="text-center">Page Not Found</h1>
            <p>Oops, Looks like you've stumbled upon an item that currently does not exist. But don't worry, there are plenty of other cool items to choose from in the Anythink marketplace. Take a look around and find something new!</p>
            <Link to="/" className="text-white text-center d-block">Return Home</Link>
        </div>  
    </div>
  )
}

export default NotFound

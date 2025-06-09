import { Link } from "react-router-dom";
import Home from "../home_icon/Home";

const ErrorPage = () => {
  return (
    <div>
      <Home />
      <p>Oh no, this route doesn't exist!</p>
      <Link to="/">
        You can go back to the home page by clicking here though!
      </Link>
    </div>
  );
};

export default ErrorPage;
import { Link } from "react-router-dom";
import "./Header.css"; // Importing a separate CSS file for styling
import image2 from "./a-aa-aaa-letters-logo-260nw-2459715289.webp";
export default function Header() {
  return (
    <nav className="header">
     <div className="logo-container">
        <img src={image2} alt="gym logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/bodyinfo">Body Info</Link>
        </li>
        <li>
          <Link to="/euipmentList">Equipment List</Link>
        </li>
      </ul>
    </nav>
  );
}

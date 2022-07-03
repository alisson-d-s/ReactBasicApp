import { Link } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/"}>Welcome</Link>
            <Link to={"/exercise1"}>Exercise1</Link>
        </div>
    );
};

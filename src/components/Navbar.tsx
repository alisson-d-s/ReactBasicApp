import { Link } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/"}>Home</Link>
            <Link to={"/exercise1"}>Exercise1</Link>
            <Link to={"/githubrepositories"}>GithubRepositories</Link>
        </div>
    );
};

import { Route, Routes } from "react-router-dom";
import { Exercise1 } from "./pages/Exercise1/Exercise1";
import { GithubRepositories } from "./pages/Exercise2/GithubRepositories";
import { Home } from "./pages/Home";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise1" element={<Exercise1 />} />
            <Route path="/githubrepositories" element={<GithubRepositories />} />
        </Routes>
    );
};

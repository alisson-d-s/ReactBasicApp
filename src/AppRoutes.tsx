import { Route, Routes } from "react-router-dom";
import { Exercise1 } from "./pages/Exercise1";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/exercise1" element={<Exercise1 />} />
        </Routes>
    );
};

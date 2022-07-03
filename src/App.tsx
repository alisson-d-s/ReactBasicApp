import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Navbar } from './components/Navbar';
import "./css/GlobalStyle.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;

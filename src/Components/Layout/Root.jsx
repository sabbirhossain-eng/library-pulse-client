import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";

const Root = () => {
    const {darkMode} = useAuth();
    return (
        <div className={`lg:mr-16 lg:ml-16 ${darkMode ? "bg-[#1f2023] rounded-lg text-[#ffffff]" : "light-theme"}`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar/Navbar";

const Root = () => {
    return (
        <div className="lg:mr-16 lg:ml-16">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
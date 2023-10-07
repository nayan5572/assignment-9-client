import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <div className="font-oswald">
            <div className="">
                <div className="">
                    <NavBar></NavBar>
                </div>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
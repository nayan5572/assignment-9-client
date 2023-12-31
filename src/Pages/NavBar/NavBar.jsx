import { Link, NavLink } from "react-router-dom";
import logoImg from '../../assets/education.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const navLink = <>

        <li><NavLink activeClassName="active:text-orange-500" to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

    </>

const handleLogOut = () => {
    logOutUser()
    .then()
    .catch()
}


    return (
        <div className="sticky">
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className="w-12" src={logoImg} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-xl">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <>
                            <span className="mr-4">{user.displayName}</span>
                            <span className="mr-8"><img className="rounded-full w-20" src={user.photoURL} alt="" /></span>
                            <a onClick={handleLogOut} className="btn bg-orange-500 text-white hover:bg-orange-500">Sign Out</a>
                        </>
                            :
                            <div className="btn-group">
                                <Link to="/login">
                                    <button className="btn bg-orange-500 text-white hover:bg-orange-500">Login</button>
                                </Link>
                                <Link to="/registration">
                                    <button className="btn bg-orange-500 text-white hover:bg-orange-500">Register</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
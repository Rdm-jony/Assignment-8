import { NavLink } from "react-router-dom";
import './Navbar.css'

const menuList = <>
    <li><NavLink to="/">Home</NavLink> </li>
    <li> <NavLink to="listedBooks">Listed Books</NavLink></li>
</>

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menuList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl pl-0">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal space-x-10">
                    {menuList}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-custom-primary text-neutral-100 mr-5">Sign In</a>
                <a className="btn btn-primary text-neutral-100">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;
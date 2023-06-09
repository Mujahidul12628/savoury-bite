/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Footer/Footer";



const Menubar = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user?.email);

    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div className="header-content">
                <div className="logo-container">Savory Bites</div>
                <div id="menu-container">
                    <Link to="/">
                        <div>Home</div>
                    </Link>

                    <Link to="/blog">
                        <div>Blog</div>
                    </Link>

                    <Link to="/chefs">
                        <div>Chefs</div>
                    </Link>

                    <Link to="/register">
                        <div>Registration</div>
                    </Link>

                    <div id="signInOut">
                        <div >
                            {user?.email ? (
                                <div id="loggedOutBtn">
                                    <div onClick={handleLogout}>Logout</div>
                                </div>
                            ) : (
                                <Link to="/login">
                                    <div id="loggedInBtn">Login</div>
                                </Link>
                            )}
                        </div>

                        <div id="email" title={user?.email}>{user?.email} </div>


                    </div>

                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Menubar;

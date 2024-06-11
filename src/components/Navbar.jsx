import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-dark">
            <Link className="btn btn-info m-2" to="/">
                Home
            </Link>
            <Link className="btn btn-info m-2" to="/pokemon">
                Pokemon
            </Link>
        </div>
    );
};

export default Navbar;

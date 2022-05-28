import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className="m-5 p-3">
            <Link className="custom-link p-3 shadow rounded ms-2" to="/FoodMania">Food Mania</Link>
            <Link className="custom-link p-3 shadow rounded ms-2" to="/allfriends">All Friends</Link>
        </div>
    );
};

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const { id, name, email, website, phone } = props.friend;
    return (
        <div className="col-md-4">
            <div className="custom-box">
                <h4>{id}. {name}</h4>
                <p>Mail Me: {email}</p>
                <p>Find Me: {website}</p>
                <p><small>Call Me: {phone}</small></p>
                <Link to={`/friend/${id}`}><button className="btn btn-dark">Show Details</button></Link>
            </div>

        </div>
    );
};

export default Friend;
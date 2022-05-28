import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleFriend = () => {
    const {friendID} = useParams();
    const [details, setDetails] =useState({});
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendID}`)
        .then(response => response.json())
        .then(data => setDetails(data));
    }, [friendID])
    return (
        <div className="container">
            <div className="row text-center mt-5">
                <h3>{details.name}</h3>
                <h6>Email: {details.email}</h6>
                <p>Web Adress: {details.website}</p>
                <p><strong>Company: {details.company?.name}</strong></p>
                <h4><strong>Our Identity: {details.company?.catchPhrase}</strong></h4>
                <Link to={'/allfriends'}><button className="btn btn-secondary mt-5">Back To All Friends</button></Link>
            </div>
        </div>
    );
};

export default SingleFriend;
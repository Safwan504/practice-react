import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const AllFriends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setFriends(data))
    }, [])
    return (
        <div>
            <div className="container">
             <h3 className="mt-3 mb-3">Here are some fake friends</h3>
             <div className="row">
                 {
                     friends.map((friend) => <Friend friend={friend} key={friend.id}></Friend>)
                 }
             </div>
            </div>
            
            
        </div>
    );
};

export default AllFriends;
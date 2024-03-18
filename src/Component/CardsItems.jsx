import React from "react";
import "../assetsandstyles/style.css";

import { Link } from "react-router-dom";


const CardsItems = ({ user }) => {
    return (
        <div className="robo-card">
            <div className="robo-image">
                <img src={`https://robohash.org/${user.name.first}`} alt={`Robot ${user.name.first}`} />
                <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                <p>{user.email}</p>
               <button><Link to={`/user/`+ user.name.first + '/' +user.email }>knowaboutmemore</Link></button> 
            </div>
        </div>
    );
};

export default CardsItems;
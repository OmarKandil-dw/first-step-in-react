import React from "react";
function User(props){
return (
    <React.Fragment>
    <h1>{props.nom}.{props.prenom}</h1>
    <img>{props.img}</img>
    <p>{props.description}</p>
    
    </React.Fragment>
    );
}

export default User;

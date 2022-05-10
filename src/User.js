import React from "react";
function User(props){
return (
    <React.Fragment>
    <p>{props.id}</p>
    <h1>{props.nom}.{props.prenom}</h1>
    <h2>{props.adresse}</h2>
    
    </React.Fragment>
    );
}

export default User;

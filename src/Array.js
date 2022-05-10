import React from "react";
import User from './User';
function Array(){
    const arrayUsers = [
        {id:'1',nom:'Omar',prenom:'kandil',adresse:'Tanger'},
        {id:'2',nom:'RACHID',prenom:'DW',adresse:'Fes'},
        {id:'3',nom:'fatima',prenom:'acharki',adresse:'Rabat'}
    ];
    return(
        <div>
            {arrayUsers.map((element)=>{
                return User(element);
            })}


        </div>
    );
};
export default Array;
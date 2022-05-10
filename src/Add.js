import React, { useState } from "react";
function Add() {
    const [number,Ajouter]= useState (0)
    return (
        <React.Fragment>
            <h1>{number}</h1>
            <button onClick={()=> Ajouter(R=>R+1)}>Add</button>
        </React.Fragment>
    )
  }
  
export default Add;

import React from "react";

// getting props in functional components
 
const Gender=(props)=>{
    const {genderType} = props;
    return(<p>I am a {genderType}</p>)

}

export default Gender;
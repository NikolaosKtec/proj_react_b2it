import React, { useState } from "react";
import axios from "axios";

function Profile(){

    //let token = localStorage.getItem("token")
    const [data,sData] = useState({avatar:{image_high_url:""}});

    function loadHandler(){
     
        const url= "https://frontendproject.b2bit.company/account/profile/"
        axios.get(url)
        .then(responce=>{
          sData(responce.data)
          
        })
        .catch(err=>{
          console.log(err);
         
        })
  }
    return(
        <div className="FlexCmid borderI" onLoad={loadHandler()}>
          
          <figcaption className="ma">profile picture</figcaption>
          <img className="imgSmall ma" src={data.avatar.image_high_url}/>
          <div><p>your name: {data.name}</p>
            <p>{data.last_name}</p> 
            </div>
           
            <p>your email: {data.email}</p> 
            <p>{data.last_login}</p>
      </div>
    )
}

export default Profile
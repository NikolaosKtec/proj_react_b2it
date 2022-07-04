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
        <section className="Flex TemplII" onLoad={loadHandler()}>
          
          <figcaption className="ma">profile picture</figcaption>
            <img className="imgSmall ma" src={data.avatar.image_high_url}/>
          <div>
            <span className="text">your name:</span>
            <span>{data.name+' '}
            {data.last_name}</span> 
          </div>
           <div>
            <span className="text">your email:</span> 
              <span> {data.email}</span>
           </div>
            
            <span style={{display:'none'}}>{data.last_login}</span>
            <button onClick={(e)=>{
              localStorage.clear()
              window.location.href = "/login"
            }}> logOut</button>
      </section>
    )
}

export default Profile
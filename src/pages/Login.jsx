import React from "react"
import axios from "axios"
import {ImgLogo} from "./../components/ImgLogo"
import { setAuthToken } from "../api/setAuthToken"
import { useState } from "react"

function Login(){
    const [password, Spwrd] = useState('')
    const [email, Stmail] = useState('')
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      axios.post("https://frontendproject.b2bit.company/account/tokens/",
      {email,password} )
       .then(Response => {
          
          let token = {}
           token = JSON.stringify(Response.data.tokens.access);
  
          //esta funcionando
          localStorage.setItem("token",token);
  
          
          setAuthToken(token);
  
        
          window.location.href = '/'
  
        })
        .catch(err => console.log(err));
    };
    
    return(
        <section className="FlexC">
            <ImgLogo/>
            <form
                onSubmit={handleSubmit}
            >
                <label>Email: </label>
                <input type="text" onChange={(e)=> Stmail(e.target.value)} name="email"/>

                <label>Password: </label>
                <input type="password" onChange={(e)=> Spwrd(e.target.value)} name="password"/>
            
                <button type="submit" value="submit">Login</button>
            </form>


        </section>
    )
}


export  {Login}
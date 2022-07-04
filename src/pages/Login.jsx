import React from "react"
import axios from "axios"
import {ImgLogo_m} from "./../components/ImgLogo"
import { setAuthToken } from "../api/setAuthToken"
import { useState } from "react"

function Login(){
    
    const [password, Spwrd] = useState('')
    const [email, Stmail] = useState('')
    const [haserror, Serror] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      axios.post("https://frontendproject.b2bit.company/account/tokens/",
      {email,password},{timeout:1500} )
       .then(Response => {
          
          let token = {}
           token = JSON.stringify(Response.data.tokens.access);
  
          //esta funcionando
          localStorage.setItem("token",token);
  
          
          setAuthToken(token);
  
        
          window.location.href = '/'
  
        })
        .catch(err => {
            console.log(err)
            
            Serror(true)
           
        });
        
    };
    
    return(
        <section className="Flex TemplI">
           
            <ImgLogo_m />
            <form
                onSubmit={handleSubmit}
            >
                <div className="space">
                    <label>Email: </label>
                    <input type="text" placeholder="email-l" onChange={(e)=> Stmail(e.target.value)} name="email" required/>
                </div>
                
                <div className="space">
                    <label> Passord:</label>
                    <input type="password" placeholder="*******" onChange={(e)=> Spwrd(e.target.value)} name="password"/>
                </div>
                <Has_errorsUser/>
                <div className="space">
                    <button type="submit" value="submit">Login</button>
                </div>
            </form>


        </section>
    )

    function Has_errorsUser(props){
        
       return( haserror?   <p className="error" style={{color:"red"}}> Senha ou Email estão incorretos!</p>:  null
        )
    }

}
export  {Login}
//import { getValue } from "@testing-library/user-event/dist/utils";

import React, { useState } from "react";
//import Profile from "./profile";

function HomePage() {

  
  //token = token.replaceAll("\"","")

    const clickHandler = (props)=>{
     
      window.location.href = "/profile"
  }


    return (
      <div className="FlexCmid borderI">
          <h1>Bem-vindo!</h1>
          <button onClick={clickHandler} > meu perfil</button>
      </div>
    );

  }

  export default HomePage;
  
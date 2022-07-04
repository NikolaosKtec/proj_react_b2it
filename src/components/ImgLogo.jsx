//import react from "react"
import b2bitLogo from "./../assets/b2bitLogo.png"

function ImgLogo(props){
    return(
        <img className="ma" src={b2bitLogo}/>
    )
     
}        

function ImgLogo_m(){
    return(
        <img className="ma" style={{maxWidth:'200px'}} src={b2bitLogo}/>
    )
}

function ImgLogo_pp(){
    return(
        <img className="ma pp" src={b2bitLogo}/>
    )
}
export {ImgLogo,ImgLogo_pp,ImgLogo_m}
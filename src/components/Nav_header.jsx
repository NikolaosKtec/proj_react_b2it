//import react from "react"
import {ImgLogo_pp} from "./ImgLogo"
import "./../style/style.css"

function Nav_header(){

    return(
    <header className="FlexI">
       <ImgLogo_pp/>
        <nav className="nav_header">
            <a href="/">home</a>
            <a href="/login">Login</a>
        </nav>

    </header>
    )
}

export default Nav_header
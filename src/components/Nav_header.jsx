//import react from "react"
import {ImgPP} from "./ImgLogo"
import "./../style/style.css"

function Nav_header(){

    return(
    <header className="Flex rgbaB">
        <ImgPP/>
        <nav className="nav_header">
            <a href="/">home</a>
            <a href="/login">Login</a>
        </nav>

    </header>
    )
}

export default Nav_header
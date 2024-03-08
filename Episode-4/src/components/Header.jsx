import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

let Header = () => {

    let [btn,setBtn] = useState("Login");
    
    return <nav>
        <div className="logo">
            <img src={LOGO_URL} alt="Food Logo" />
        </div>

        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Cart</a></li>
            <button onClick={()=>{
              (btn === "Login") ? setBtn("Logout") : setBtn("Login");
            }}>{btn}</button>
        </ul>
    </nav>
};

export default Header;
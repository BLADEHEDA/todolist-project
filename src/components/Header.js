import React from 'react';
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";

    const Header = ({checked,setchecked}) => {
// the lines below changes icons on click 
const checkbox= checked? SwitchToDarkIcon :SwitchToLightIcon;

 const toggleCheck=()=>{
    setchecked(!checked)
 }

    return(
        <header >
             <h1 className="head">T O D O</h1>
             <div onClick={toggleCheck}>  
                 <img src={checkbox} alt="icon-sun" className="themeicon" />
             </div>
         </header>
     );
  }
export default Header;

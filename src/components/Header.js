import React, {useState} from 'react';
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";



    const Header = () => {
// the lines below changes icons on click 
 const [checked,setchecked]= useState();

 const checkbox= checked? SwitchToDarkIcon :SwitchToLightIcon ;
 const toggleclass= checked?"":"dark";
 const toggleCheck=()=>{
    setchecked(!checked)
 
    // document.body.className = checked;
 }

    return(
        <header className={toggleclass }>
             <h1 className="head">T O D O</h1>
             <div onClick={toggleCheck}>  
                 <img src={checkbox} alt="icon-sun" className="themeicon" />
             </div>
         </header>
             
   
     );
  }


export default Header;

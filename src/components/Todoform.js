import React from 'react'
import {useState} from "react"


const Todoform = (props) => {
  const [name,setname]= useState("");

  const handleChange=(e)=>{
    setname(e.target.value);  
  }   

    const handleSubmit=(e)=>{
        e.preventDefault();
          props.onSubmit({
            id:Math.floor(Math.random()*10000),
            task:name
        })
        setname("") 
    }
  return (
    <div>
            <form className="list-input" onSubmit={handleSubmit} >
                    <span className="radio"></span>
                    <input type="text" className="bar" value={name} placeholder="Create a newdddd Todo" 
                    onChange={handleChange} />
                </form>  
    </div>
  )
}

export default Todoform

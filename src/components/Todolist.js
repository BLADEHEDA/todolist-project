import React from 'react';
import {Tasks} from "./Tasks";
import {useState} from "react"
import Todoform from './Todoform';
 
function Todolist(props){
    const [tasks , settasks] = useState(Tasks);
  
    // the function below removes all the items from the list 
    const remove= ()=>{
        settasks([]);                 
    }
    // the function below removes esch item individualy 
    const removeeach= (id)=>{        
        let newtasks= tasks.filter((e)=>e.id !==id)
        settasks(newtasks);
    }

    //   the lines below add tasks to the list 
    const Addtasks= (task)=>{
    if(!task.task){
       return; 
    }
    const newtask= [task, ...tasks];   
    settasks(newtask);
};

// the code below toggles styles on a list if it is complete 
    const [strike , setstrike] = useState();
    const togglestrike=strike? "darks":"lights";

        const completed=(e)=>{
               setstrike(!strike);
        }

    return(
        <div >
           <Todoform onSubmit={Addtasks}/>
            <div className='Tasks'>
             
           {tasks.map((e)=>{
                 const {id,task,completed} = e;
                 console.log(" the state of completenes i: "+ completed);
        return(

            <div > 
             {/* <span className="radio" id='radiox'></span> */}

            <div key={id} className={`barx`}  >
            <input type="checkbox" />
           <p  onClick={completed} className={`Appx ${togglestrike}`}   >{task} </p>           
              <button onClick={()=> removeeach(id)}>remove each</button>
            </div>   
             </div>  
        )    
        })} 
        
        {/* Dont bother about this section i"ll tackle this once im done doing whatever i was doing*/}
        <div className="status">
        <button onClick={remove}>Clear All</button>
        <button onClick={remove}>Active</button>     {/*this is fpr the task not yet completed  */}
        <button onClick={remove}>Completed</button> {/*this is for the tasks completed  onClick={()=> completed(tasks.id)}  */}
        </div>
    

            </div>
            

.        </div>
    );
};
export default Todolist
import React from 'react';
import {Tasks} from "./Tasks";
import {useState} from "react"
import Todoform from './Todoform';

function Todolist(){
    const [tasks , settasks] = useState(Tasks);
    const [taskx , settaskx] = useState([]);
    const [strike , setstrike] = useState();

    //   the lines below add tasks to the list 
const Addtasks= (task)=>{
    // task.preventDefault();
    const newtasks= [task, ...taskx];
    settaskx(newtasks);
    console.log(...taskx);
}

    // the function below removes all the items from the list 
    const remove= ()=>{
        settasks([]);
    }
    // the function below removes esch item individualy 
    const removeeach= (id)=>{        
        let newtasks= tasks.filter((e)=>e.id !==id)
        settasks(newtasks);
    }
    // the lines below strikes the lines when ou click on the rask complieted
  
        const complete=(id)=>{
            setstrike(!strike);
        }
        const togglestrike=strike? "darks":"lights";
// space allocatedfor for handlechange function


// space allocated for the handle submit function 
    return(
        <div>
           {/* space alllocated for the Todoform div */}
           <Todoform onClick={Addtasks}/>
            <div className="Tass">
             
           {tasks.map((e)=>{
                 const {id,task} = e;
        return(
             
            <div key={id} className={`bar ${togglestrike}`}>
           <p className={`Appx ${togglestrike}`} onClick={complete}>{task}</p>  
              <button onClick={()=> removeeach(id)}>remove each</button>
            </div>   
        )      
        })} 

        <button onClick={remove}>remove all</button>
            </div>

        </div>
    );
};
export default Todolist
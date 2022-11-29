import React from 'react';
import {Tasks} from "./Tasks";
import {useState} from "react"
import Todoform from './Todoform';

function Todolist(){
    const [tasks , settasks] = useState(Tasks);
    const [strike , setstrike] = useState();

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
      
    //    strike= tasks[0
        setstrike(!strike);
    }
    console.log(tasks[0])

       const togglestrike=strike? "darks":"lights";

    //   the lines below add tasks to the list 
    const Addtasks= (task)=>{
    if(!task.task){
       return; 
    }
    const newtask= [task, ...tasks];
    settasks(newtask);
    console.log(newtask);
};
// the code below toggles styes on a list if it is complete 
// const completed=(id)=>{
//     let updateTask= tasks.map(id=>{
//         if(tasks.id===id){
//         tasks.completed=!tasks.completed;
//         }
//         return tasks;
//     })
// }
    return(
        <div >
           <Todoform onSubmit={Addtasks}/>
            <div className='Tasks'>
             
           {tasks.map((e)=>{
                 const {id,task} = e;
        return(
         
            <div > 
             <span className="radio" id='radiox'></span>
            <div key={id} className={`barx`}  >
           <p className={`Appx ${togglestrike}`} onClick={complete}>{task} </p>  
              <button onClick={()=> removeeach(id)}>remove each</button>
            </div>   
             </div>  
        )    
        })} 
        <div className="status">
        <button onClick={remove}>Clear All</button>
        <button onClick={remove}>Active</button>     {/*this is fpr the task not yet completed  */}
        <button onClick={remove}>Completed</button> {/*this is for the tasks completed   */}
        </div>
    

            </div>

        </div>
    );
};
export default Todolist
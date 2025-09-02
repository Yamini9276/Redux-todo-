import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../features/Todo/todoSlice";


export default function Addform(){
    const [task,setTask]=useState("");
    const dispatch=useDispatch();
    const handleChange=(event)=>{
        setTask(event.target.value);
    }
    const handleSubmit=(event)=>{
       event.preventDefault();
       console.log(task);
       dispatch(addTask(task));
       setTask("");
    }
    return(
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={task}></input> <br></br><br></br>
            <button type="Submit">Add Button</button>
         </form>
        </>
    )
}
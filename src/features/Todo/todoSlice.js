import {createSlice, nanoid} from "@reduxjs/toolkit";


const initialState={
    todos:[{ id:nanoid(), task:"Intial Task",isDone:false }]
};

export const todoSlice=createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
        addTask:(state,action)=>{
          const newTodo={
              id:nanoid(),
              task:action.payload,
              isDone:false
          }
          state.todos.push(newTodo);
        },
        deleteTask:(state,action)=>{
           state.todos=state.todos.filter((todo)=> todo.id!==action.payload)  
        },
        markDone: (state, action) => {
           const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) todo.isDone = true;
        }
    }
})

export const {addTask,deleteTask, markDone}=todoSlice.actions;
export default todoSlice.reducer;
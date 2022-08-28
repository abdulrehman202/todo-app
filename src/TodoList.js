import React from 'react'
import './listContainer.css'
import Task from './Task'
import InputBar from './InputBar'
import { useStateValue } from './state_provider';


function TodoList({taskStatus})
{
    const [{todoList}] = useStateValue();


    const getTasks=()=>
    {
      const results = [];
      
      todoList.forEach(item=>{
        if (taskStatus === 'all'){
            results.push(
                <Task id={item.id} text= {item.text} showButtons = {false}/>
              )
        } 
        else if (item.status === taskStatus) {
              results.push(
                <Task id={item.id} text= {item.text} showButtons = {taskStatus =='incomplete'}/>
              )
            }
          })
  
          return results;
    }

    return(
    
    <div className='list__container'>
      
      <InputBar />
      <div className='column__title'>
        <strong>ID</strong>
        <strong>Task Name</strong>
        <strong>Action</strong>
      </div>
      {
        getTasks()
      }

    </div>)
}

export default TodoList;
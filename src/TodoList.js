import React from 'react'
import './listContainer.css'
import Task from './Task'
import InputBar from './InputBar'
import { useStateValue } from './state_provider';


function TodoList()
{
    const [{todoList}] = useStateValue();


    const getTasks=()=>
    {
      const results = [];
      
      todoList.forEach(item=>{
        if (item.status === 'incomplete') {
              results.push(
                <Task id={item.id} text= {item.text} />
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
import React from 'react'
import './TodoList.css'
import './Task.css'
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
            results.push(
                <Task id={item.id} text= {item.text} showButtons = {taskStatus === 'incomplete'} status={taskStatus}/>
            )
          })
  
          return results;
    }

    return(
    
    <div className='list__container'>
      
      <InputBar />
      <table>
        <tr className='task__row'>
            <th>ID</th>
            <th>Task Name</th>
            <th>Action</th>
        </tr>

      {
        getTasks()
      }
      </table>

    </div>)
}

export default TodoList;
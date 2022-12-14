import React from 'react'
import './TodoList.css'
import './Task.css'
import Task from './Task'
import InputBar from './InputBar'
import { useStateValue } from './state_provider';


function TodoList({screen})
{
    const [{todoList}] = useStateValue();


    const getTasks=()=>
    {
      const results = [];
      
      todoList.forEach(item=>{
        if(screen === 'all')
            results.push(
                <Task id={item.id} text= {item.text} taskStatus = {item.status}/>
            )
        
        else if(screen === item.status)
        results.push(
          <Task id={item.id} text= {item.text} taskStatus = {item.status}/>
      )
          })
  
          return results;
    }

    return(
    
    <div className='list__container'>
      {
        screen === 'all'?
        <InputBar />: (<span></span>)
      }
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
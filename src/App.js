import {useState } from 'react';
import './App.css';
import './listContainer.css'
import './navigationMenu.css'
import Task from './Task'
import InputBar from './InputBar'
import { useStateValue } from './state_provider';

function App() {
  
  const [{todoList}, dispatch] = useStateValue();


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
  

  return (
    <div className="App">
      <div className='navigation__menu'>
        <ul>
          <li><a>All</a></li>
          <li><a>Completed</a></li>
          <li><a>Incomplete</a></li>
        </ul>
      </div>
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


      </div>        
    
    </div>
  );
}

export default App;

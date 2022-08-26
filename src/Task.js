import React from 'react';
import './Task.css';
import { useStateValue } from './state_provider';

function Task({text, id})
{
  const [ dispatch] = useStateValue();


  const markAsCompleted = ()=>
  {
    dispatch({
      type: 'MARK_AS_COMPLETED',
      id: id,
    })
  }

    return(
        <div className='task__row'>
          <p>{id}</p>
          <p>{text}</p>
          <div className='action__buttons'>
          <button onClick={markAsCompleted}>Done</button>
          <button>Remove</button>
          </div>
          
        </div>
    )
}

export default Task;
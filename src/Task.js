import React from 'react';
import './Task.css';
import { useStateValue } from './state_provider';

function Task({text, id,  taskStatus})
{
  const [{}, dispatch] = useStateValue();


  const markAsCompleted = ()=>
  {
    dispatch({
      type: 'MARK_AS_COMPLETED',
      id: id,
    })
  }

    return(
          <tr className='task__row'>
            <td>{id}</td>
            <td>{text}</td>
            <td>
            <div className='action__buttons'>
            {
            taskStatus==='incomplete' ? (
              <div>
              <button onClick={markAsCompleted}>Done</button>
              <button>Remove</button>
              </div>
    
            ) : <strong className='complete__status'>{taskStatus.toUpperCase()}</strong>
          }
          </div>
            </td>
          </tr>
    )
}

export default Task;
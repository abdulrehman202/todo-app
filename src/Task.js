import React from 'react';
import './Task.css';
import { useStateValue } from './state_provider';

function Task({text, id, showButtons, status})
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
            showButtons ? (
              <div>
              <button onClick={markAsCompleted}>Done</button>
              <button>Remove</button>
              </div>
    
            ) : status
          }
          </div>
            </td>
          </tr>
    )
}

export default Task;
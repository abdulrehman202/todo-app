import React, {useState} from 'react';
import Arrow from '@material-ui/icons/ArrowForward'
import { useStateValue } from './state_provider';
import './InputBar.css'

function InputBar()
{

  const [{taskId}, dispatch] = useStateValue();
  const [taskName, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const addTask = () =>{
    
    dispatch({
      type: 'ADD_TO_LIST',
      item:{
        id: taskId,
        text: taskName,
        status: 'incomplete',
      }
    })
  }

    return(
        <div className='input__bar'>
          
          <strong>Create Task</strong>
          <input name = 'taskName' type = 'text' value={taskName} onChange={handleChange}/>
            <button onClick={addTask}>
             <Arrow />
            </button>
        </div>
    )
}

export default InputBar;
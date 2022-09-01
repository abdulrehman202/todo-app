import React, {useState} from 'react';
import { useStateValue } from './state_provider';
import './InputBar.css'

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

function InputBar()
{
  const [open, setOpen] = React.useState(false);
    
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

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
    handleToClose()
  }

    return(
          <div>
            <button className='input__bar' variant="outlined" color="primary" 
                onClick={handleClickToOpen}>
          Add New Task
        </button>
            <Dialog open={open} onClose={handleToClose}>
          <DialogTitle>{"New Task"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            <div className='input__bar'>
          
          <strong>Task Name</strong>
          <input name = 'taskName' type = 'text' value={taskName} onChange={handleChange}/>
          
        </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <button onClick={addTask} 
                    color="primary" autoFocus>
              Create Task
            </button>
            <button onClick={handleToClose} 
                    color="primary" autoFocus>
              Close
            </button>
          </DialogActions>
        </Dialog></div>
    )
}

export default InputBar;
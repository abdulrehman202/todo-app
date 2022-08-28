import React from 'react';
import './navigationMenu.css'
import {Link} from 'react-router-dom'

function NavigationDrawer()
{
    return(<div className='navigation__menu'>
    <ul>
      <li><Link to='/'>All</Link></li>
      <li><Link to='/completed'>Completed</Link></li>
      <li><Link to='/incomplete'>Incomplete</Link></li>
    </ul>
  </div>)
}

export default NavigationDrawer;
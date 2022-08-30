import React from 'react';
import './NavigationDrawer.css'
import {Link} from 'react-router-dom'

function NavigationDrawer()
{
    return(<div className='navigation__menu'>
    <ul>
      <li><Link className='navigation__links' to='/'>All</Link></li>
      <li><Link className='navigation__links' to='/completed'>Completed</Link></li>
      <li><Link className='navigation__links' to='/incomplete'>Incomplete</Link></li>
    </ul>
  </div>)
}

export default NavigationDrawer;
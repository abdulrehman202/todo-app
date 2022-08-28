import React from 'react';
import './navigationMenu.css'

function NavigationDrawer()
{
    return(<div className='navigation__menu'>
    <ul>
      <li><a>All</a></li>
      <li><a>Completed</a></li>
      <li><a>Incomplete</a></li>
    </ul>
  </div>)
}

export default NavigationDrawer;
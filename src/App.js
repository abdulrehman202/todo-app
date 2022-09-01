import './App.css';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import TodoList from './TodoList';
import NavigationDrawer from './NavigationDrawer';
import CreateTasKDialog from './CreateTaskDialog';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' element=  {[<NavigationDrawer />, <TodoList screen='all' />]}></Route>
        <Route path='/incomplete' element={[<NavigationDrawer />, <TodoList screen='incomplete' />]}></Route>
        <Route path='/completed' element={[<NavigationDrawer />, <TodoList screen='complete' />]}></Route>           
      </Switch>
    </div>
    </Router>
  );
}

export default App;

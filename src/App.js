import './App.css';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import TodoList from './TodoList';
import NavigationDrawer from './NavigationDrawer';


function App() {
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' element={[<NavigationDrawer />, <TodoList taskStatus='all' />]}></Route>
        <Route path='/incomplete' element={[<NavigationDrawer />, <TodoList taskStatus='incomplete' />]}></Route>
        <Route path='/completed' element={[<NavigationDrawer />, <TodoList taskStatus='complete' />]}></Route>           
      </Switch>
    </div>
    </Router>
  );
}

export default App;

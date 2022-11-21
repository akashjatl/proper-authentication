import Home from './Home';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Change from './Change';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Logout' element={<Logout/>}></Route>
        <Route path='/Change' element={<Change/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

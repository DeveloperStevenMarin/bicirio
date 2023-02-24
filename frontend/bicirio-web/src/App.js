import './App.css';
import { Routes, Route} from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import Stations from './pages/Stations';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='users/add' element={<AddUser/>}/>
      <Route path='users/update' element={<UpdateUser/>}/>
      <Route path='stations' element={<Stations/>}/>
    </Routes>
  );
}

export default App;

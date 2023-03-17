import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import LoginPage from "./components/login/LoginPage";
import Users from "./components/user/Users";
import Stations from "./components/station/Stations";
import AddUser from "./components/user/AddUser";
import UpdateUser from "./components/user/UpdateUser";
import AddStation from './components/station/AddStation'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="users/update" element={<UpdateUser />} />
        <Route path="stations" element={<Stations />} />
        <Route path="stations/add" element={<AddStation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

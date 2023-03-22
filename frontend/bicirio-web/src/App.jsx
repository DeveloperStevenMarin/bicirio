import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import LoginPage from "./components/login/LoginPage";
import Users from "./components/user/Users";
import Stations from "./components/station/Stations";
import AddUser from "./components/user/AddUser";
import UpdateUser from "./components/user/UpdateUser";
import AddStation from './components/station/AddStation'
import UpdateStation from './components/station/UpdateStation'
import Schedules from './components/schedule/Schedules'
import AddSchedule from "./components/schedule/AddSchedule";
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
        <Route path="stations/update" element={<UpdateStation />} />
        <Route path="schedules" element={<Schedules />} />
        <Route path="schedules/add" element={<AddSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import LoginPage from "./components/login/LoginPage";
import Users from "./components/user/Users";
import Stations from "./components/station/Stations";
import AddUser from "./components/user/addUser/AddUser";
import UpdateUser from "./components/user/updateUser/UpdateUser";
import AddStation from './components/station/addStation/AddStation'
import UpdateStation from './components/station/updateStation/UpdateStation'
import Schedules from './components/schedule/Schedules'
import AddSchedule from "./components/schedule/AddSchedule/AddSchedule";
import AddUserStation from "./components/station/addUserStation/AddUserStation";
import UserDetailsCard from "./components/user/userDetailCard/UserDetailsCard";
import Location from "./components/location/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/update" element={<UpdateUser />} />
        <Route path="/users/userDetails" element={<UserDetailsCard />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/stations/add" element={<AddStation />} />
        <Route path="/stations/update" element={<UpdateStation />} />
        <Route path="/stations/addUser" element={<AddUserStation />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/schedules/add" element={<AddSchedule />} />
        <Route path='/location' element={<Location />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

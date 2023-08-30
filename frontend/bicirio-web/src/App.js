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
        <Route path="*" element={<Navigate to="/bicirio/home" replace />} />
        <Route path="/bicirio/" element={<LoginPage />} />
        <Route path="/bicirio/home" element={<Home />} />
        <Route path="/bicirio/users" element={<Users />} />
        <Route path="/bicirio/users/add" element={<AddUser />} />
        <Route path="/bicirio/users/update" element={<UpdateUser />} />
        <Route path="/bicirio/users/userDetails" element={<UserDetailsCard />} />
        <Route path="/bicirio/stations" element={<Stations />} />
        <Route path="/bicirio/stations/add" element={<AddStation />} />
        <Route path="/bicirio/stations/update" element={<UpdateStation />} />
        <Route path="/bicirio/stations/addUser" element={<AddUserStation />} />
        <Route path="/bicirio/schedules" element={<Schedules />} />
        <Route path="/bicirio/schedules/add" element={<AddSchedule />} />
        <Route path='/bicirio/location' element={<Location />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

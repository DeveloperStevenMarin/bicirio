import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Users from "./pages/Users";
import Stations from "./pages/Stations";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect, useState } from "react";
import MenuList from "../general/MenuList/MenuList";

import Loading from "../general/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MapModal from "../MapModal/MapModal";
import { API_LOCATION_URL } from "../../config/config";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

export default function Location() {
  const userList = useSelector((state) => state.Store.userList.data);
  const [selectedUser, setSelectedUser] = useState("");
  const users = userList.filter((user) => user.profile < 2);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState([]);
  const [startTimestamp, setStartTimestamp] = useState();
  const [endTimestamp, setEndTimestamp] = useState();

  useEffect(() => {
    setDataIsLoaded(true);
  }, []);

  useEffect(() => {
    fetchUserLocation();
  }, [selectedUser, startTimestamp, endTimestamp]);

  const fetchUserLocation = () => {
    let url = `${API_LOCATION_URL}/user/${selectedUser}`;
    if (startTimestamp && endTimestamp) {
      const startDate = startTimestamp;
      const endDate = endTimestamp;
      url = `${API_LOCATION_URL}/user/${selectedUser}/timestamp/${startDate}/${endDate}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };
  const handleStartTimestampChange = (value) => {
    setStartTimestamp(value);
    console.log(startTimestamp);
  };
  const handleEndTimestampChange = (value) => {
    setEndTimestamp(value);
    console.log(startTimestamp);
  };

  if (!dataIsLoaded) {
    return <Loading />;
  } else {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="home-content">
          <MenuList />
          <div className="content">
            <ul className="locationContentPicker">
              <li>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Operario: 
                  </InputLabel>
                  <Select
                    onChange={handleUserChange}
                    value={selectedUser}
                    label="Operario"
                  >
                    {users.map((user, index) => (
                      <MenuItem value={user.id} key={index}>
                        {user.name1} {user.surname1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </li>
              <li className="locationPickerElement">
                <DateTimePicker
                  value={startTimestamp}
                  onChange={handleStartTimestampChange}
                  defaultValue={dayjs()}
                  label="Selecciona fecha de inicio"
                />
              </li>
              <li className="locationPickerElement">
                <DateTimePicker
                  label="Fecha final"
                  value={endTimestamp}
                  defaultValue={dayjs()}
                  onChange={handleEndTimestampChange}
                />
              </li>
            </ul>

            <MapModal locationData={locationData} />
          </div>
        </div>
      </LocalizationProvider>
    );
  }
}

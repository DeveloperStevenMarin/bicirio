import express from "express";
import userRoutes from './routes/user.routes.js'
import stationRoutes from './routes/station.routes.js'
import Users_StationsRoutes from './routes/users_stations.routes.js'

const app = express();

//middlewares
app.use(express.json());

app.use(userRoutes);
app.use(stationRoutes);
app.use(Users_StationsRoutes);

export default app;
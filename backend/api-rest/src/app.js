import express from "express";
import userRoutes from './routes/user.routes.js'
import stationRoutes from './routes/station.routes.js'
import users_StationsRoutes from './routes/users_stations.routes.js'
import in_timeRoutes from './routes/in_time.routes.js'
import out_timeRoutes from './routes/out_time.routes.js'
import scheduleRoutes from './routes/schedule.routes.js'
import locationRoutes from './routes/location.routes.js'
import registerRoutes from './routes/register.routes.js'
import serviceRoutes from './routes/service.routes.js'

const app = express();

//middlewares
app.use(express.json());

app.use(userRoutes);
app.use(stationRoutes);
app.use(users_StationsRoutes);
app.use(in_timeRoutes);
app.use(out_timeRoutes);
app.use(scheduleRoutes);
app.use(locationRoutes);
app.use(registerRoutes);
app.use(serviceRoutes);


export default app;
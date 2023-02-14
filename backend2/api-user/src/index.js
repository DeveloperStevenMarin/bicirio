import app from './app.js'
import { sequelize } from './database/database.js';

// import '../src/models/user.js';
// import '../src/models/station.js';
// import '../src/models/service.js';
// import '../src/models/location.js';
// import '../src/models/register.js';
// import '../src/models/in_time.js';
// import '../src/models/out_time.js';
//import '../src/models/schedule.js';
// import '../src/models/users_stations.js'




async function main() {
    try {
        await sequelize.sync({ force: true });
        console.log('Connection has been established successfully.');
        app.listen(3000);
        console.log('Server is listening on port: ', 3000);
    } catch (error) {
        console.log('Unable to connect', error);
    }
}

main();
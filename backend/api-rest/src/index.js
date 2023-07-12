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
        await sequelize.sync({ force: false });
        console.log('Connection has been established successfully.');

        const port = 3001 || process.env.PORT ;
        const host = '0.0.0.0'; // Configura la aplicación para escuchar en todas las interfaces de red

        app.listen(port, host, () => {
            console.log('Server is listening on', host + ':' + port);
        });
        app.get('/', (req, res) => {
            res.send('Hello world!')
        })
    } catch (error) {
        console.log('Unable to connect', error);
    }
}

main();
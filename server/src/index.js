const app = require('./app');
const mongoose = require('./database');

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));























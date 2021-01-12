const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//enviroment variables
app.set("port", process.env.PORT || 3000);
app.use(cors());
//middleware
app.use(morgan('dev')); //avisa cada que llega una solicitud
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/employees", require("./routes/employees.routes")); //using express router

module.exports = app;
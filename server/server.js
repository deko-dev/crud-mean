const express = require('express');
const app = express();
const morgan = require('morgan');

// // Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Agregar Headers
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

// Database
const { mongoose } = require('./database.js')

// Routes
app.use('/api/productos', require('./routes/productos.routes'))

// Settings
app.set('port', process.env.PORT || 3000);


// Starting the server
app.listen(app.get('port'), () => {
    console.log('Serve on port', app.get('port'));
})

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
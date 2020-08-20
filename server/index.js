const express = require('express');
const app = express();
const morgan = require('morgan');

// // Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Database
const { mongoose } = require('./database.js')

// Routes
app.use('/api/productos', require('./routes/productos.routes') )

// Settings
app.set('port', process.env.PORT || 3000 );


// Starting the server
app.listen(app.get('port'), ()=> {
console.log('Serve on port', app.get('port') );
})

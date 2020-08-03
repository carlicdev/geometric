const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Database
require('./server/db/db');

// Routers
const emailRouter = require('./server/routes/emails');

// Setings
app.set('PORT', process.env.PORT || 5000);

// React static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

// Api
app.use('/api/contact', emailRouter);

app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
} );
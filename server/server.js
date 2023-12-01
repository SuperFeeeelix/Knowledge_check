const express = require('express');
require('dotenv').config();
const path = require('path');
const dbConnection = require('');// mongoDb database will go here once it has been established

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// db connection code goes here
dbConnection.on('error', (error) => {
    console.error('Error connection to the databse:', error);
});

dbConnection.once('open', async () => {
    console.log('Connected to the databse');
    
})
// db error connection goes here

//server listening goes here with midleware
Server.start().then(() => {
    Server.applyMiddleware({ app });

    if(process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, )));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '..client/dist/index.html'));
        });
    }

    app.listen(PORT, () => {
        console.log(`Server is running and listening to ${PORT}`);
        console.log(`server is listening to database`);
    });
});
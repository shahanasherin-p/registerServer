require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
require('./databae/dbConnection'); // Corrected typo

const registrationServer = express();

registrationServer.use(cors());
registrationServer.use(express.json());
registrationServer.use(router);

const PORT = process.env.PORT || 3000; // Corrected port assignment logic

registrationServer.listen(PORT, () => {
    console.log(`REGISTRATIONSERVER STARTED AT PORT ${PORT}`);
});

registrationServer.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:red;">registrationServer STARTED AT PORT AND WAITING FOR CLIENT REQUEST</h1>`); // Corrected closing tag
});

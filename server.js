const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const server = express();
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('Hello World');
});

server.listen(PORT, () => console.log(`API running on port ${PORT}`));
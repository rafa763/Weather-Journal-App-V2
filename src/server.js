import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRouter from './api/index.js';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 8080;

const server = express();
server.set('trust proxy', 1);

server.use(morgan('dev'));
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('Hello World');
});

server.use('/api', apiRouter)

server.listen(PORT, () => console.log(`API running on port ${PORT}`));
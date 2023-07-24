import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRouter from './api/index.js';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

config();

const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const server = express();
server.set('trust proxy', 1);

server.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'", '*']
      }
    }
  }));
server.use(morgan('dev'));
server.use(express.json());
server.use(cors())
server.use(express.static(join(__dirname, 'public')));

server.get('/', async (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

server.use('/api', apiRouter)

server.listen(PORT, () => console.log(`API running on port ${PORT}`));
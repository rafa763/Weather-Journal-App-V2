import express from 'express';
import weather from './weather.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Main Router');
});

router.use('/weather', weather);

export default router;
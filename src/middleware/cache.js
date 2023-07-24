import redis from 'redis';

const client = redis.createClient(6379);
await client.connect();


export async function cache(req, res, next) {
    const key = String(req.body.city);
    let hit = await client.get(key);
    if (hit !== null) {
        return res.status(200).send(JSON.parse(hit));
    } else {
        next();
    }
}

export function setCache(key, data) {
    let weather = JSON.stringify(data);
    console.log(key, weather)
    client.set(key, weather, (err) => {
        if (err) {
            throw err;
        //   console.error('Error setting cache:', err);
        }
    });
}
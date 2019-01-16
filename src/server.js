
import express from 'express';
import cors from 'cors';

import config from './config';

const api = express();

api.use(cors());

api.get("/", (req, res)=>{
	res.send("Hello World");
})
api.listen(config.server.port, () => {
	console.log(`API is now running on port ${config.server.port} in ${config.env} mode`);
});

module.exports = api;

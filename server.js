const express = require ('express');
const cors =require('cors');

const api = express();
const port =8080
api.use(cors());

api.get("/", (req, res)=>{
	res.send("Hello World");
})
api.listen(port, () => {
	console.log(`API is now running on port ${port}`);
});

module.exports = api;

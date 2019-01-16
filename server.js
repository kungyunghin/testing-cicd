const express = require ('express');
const cors =require('cors');
const path = require('path');
const api = express();
const port =8080;
api.use(cors());

api.get("/", (req, res)=>{
	res.send("Hello World");
})
api.get("/home", (req, res)=>{
	res.sendFile(path.join(__dirname + '/public/index.html'));
})
api.listen(port, () => {
	
	console.log(`API is now running on port ${port}`);
});

module.exports = api;

'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = (0, _express2.default)();

api.use((0, _cors2.default)());

api.get("/", (req, res) => {
	res.send("Hello World");
});
api.listen(_config2.default.server.port, () => {
	console.log(`API is now running on port ${_config2.default.server.port} in ${_config2.default.env} mode`);
});

module.exports = api;
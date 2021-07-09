var express = require('express');
var router = express.Router();

const {getAll} = require('../controllers/servers.js');

router.get('/api/server', getAll);

module.exports =  router;
const express = require('express');
const router = express.Router();

//auth and routes
const verifyToken = require('../auth/verify')
const cliente = require('./cliente')
const modulo = require('./modulo')
const servers = require('./servers')
const robos = require('./robos')

//auth routes
const auth = require('./auth')
router.use('/auth', auth)


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//rotas server
router.use('/cliente', cliente)
router.use('/modulo',verifyToken.verifyToken, modulo)
router.use('/servers',verifyToken.verifyToken, servers)
router.use('/robos',verifyToken.verifyToken, robos)


module.exports = router;
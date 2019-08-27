var express = require('express');
var router = express.Router();

const controllers = require('../controllers')

router
  .get('/', controllers.servers.listarServers)
  .get('/:id', controllers.servers.buscarServerPorId)
  .post('/', controllers.servers.salvarServer)
  .put('/:id', controllers.servers.salvarServer)
  .delete('/:id', controllers.servers.excluirServer)

module.exports = router
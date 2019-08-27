var express = require('express');
var router = express.Router();

const controllers = require('../controllers')
router
  .get('/', controllers.cliente.listarClientes)
  .get('/:id', controllers.cliente.buscarClientePorId)
  .post('/', controllers.cliente.salvarCliente)
  .put('/:id', controllers.cliente.salvarCliente)
  .delete('/:id', controllers.cliente.excluirCliente)

module.exports = router

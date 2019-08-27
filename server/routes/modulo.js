var express = require('express');
var router = express.Router();

const controllers = require('../controllers')
router
  .get('/', controllers.modulo.listarModulos)
  .get('/:id', controllers.modulo.buscarModuloPorId)
  .post('/', controllers.modulo.salvarModulo)
  .put('/:id', controllers.modulo.salvarModulo)
  .delete('/:id', controllers.modulo.excluirModulo)

module.exports = router
var express = require('express');
var router = express.Router();

const controllers = require('../controllers')
router
  .get('/', controllers.robos.listarRobos)
  .get('/:id', controllers.robos.buscarRoboPorId)
  .get('/:id', controllers.robos.buscarRobosPorServer)
  .get('/:id', controllers.robos.buscarRobosPorModulo)
  .post('/', controllers.robos.salvarRobo)
  .put('/:id', controllers.robos.salvarRobo)
  .delete('/:id', controllers.robos.excluirRobo)

module.exports = router
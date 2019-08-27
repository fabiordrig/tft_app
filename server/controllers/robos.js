const services = require('../services')

const listarRobos = (req, res) => {
  
  let idServer = req.body.idServer
  let idModulo = req.body.idModulo

  services.robos.listarRobos(idServer, idModulo)
  .then( lista => res.status(200).send(lista))
  .catch( erro => {
    console.log(erro)
    res.status(500).send(erro)
  });
}

const buscarRoboPorId = (req, res) => {
  
  let idCliente = req.dataSession.id_cliente
  let idRobo = req.params.id

  return services.robos.buscarRoboPorId(idRobo).then(busca => {
    res.status(201).send(busca)
  }).catch(erro => res.status(500).send(erro) )
}

const buscarRobosPorServer = (req,res) => {

  let idServer = req.params.id
  
  return services.robos.buscarRobosPorServer(idServer).then(busca => {
    res.status(201).send(busca)
  }).catch(erro => res.status(500).send(erro) )

}
const buscarRobosPorModulo = (req,res) => {

  let idModulo = req.params.id
  
  return services.robos.buscarRobosPorModulo(idModulo).then(busca => {
    res.status(201).send(busca)
  }).catch(erro => res.status(500).send(erro) )

}
const salvarRobo = (req, res) => {

  let data = req.body
  let idRobo = req.params.id

  return services.robos.salvarRobo(data, idRobo).then(save => {
    res.status(200).send(save)
  }).catch(erro => res.status(500).send(erro) )

}

const excluirRobo = (req, res) => {

  let idCliente = req.dataSession.id_cliente
  let idRobo = req.params.id

  services.robos.excluirRobo(idRobo).then(robo => {
    if (robo == 1) {
      return res.status(200).send({message: 'OK'})
    }
    if (robo == 0) {
      return res.status(204).send({message: 'No Content'})
    }
    return res.status(202).send({message: 'Accepted'})
  }).catch( error => res.status(500).send(error))
}


module.exports = {
  listarRobos,
  buscarRoboPorId,
  buscarRobosPorServer,
  buscarRobosPorModulo,
  salvarRobo,
  excluirRobo
}
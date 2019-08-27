const services = require('../services')

const listarServers = (req, res) => {
  
  let idCliente = req.dataSession.id_cliente
  services.servers.listarServers(idCliente)
  .then( lista => res.status(200).send(lista))
  .catch( erro => {
    console.log(erro)
    res.status(500).send(erro)
  });
}

const salvarServer = (req, res) => {
  let data = req.body
  let idServer = req.params.id

  data.idCliente = req.dataSession.id_cliente

  return services.servers.salvarServer(data, idServer).then(novoServer => {
    res.status(201).send(novoServer)
  }).catch(erro => {
    res.status(500).send(erro)
  })

}

const buscarServerPorId = (req, res) => {
  
  let idCliente = req.dataSession.id_cliente
  let idServer = req.params.id

  return services.servers.buscarServerPorId(idServer, idCliente).then(busca => {
    res.status(201).send(busca)
  }).catch(erro => res.status(500).send(erro) )
}

const excluirServer = (req, res) => {

  let idCliente = req.dataSession.id_cliente
  let idServer = req.params.id

  services.servers.excluirServer(idServer, idCliente).then(server => {
    if (server == 1) {
      return res.status(200).send({message: 'OK'})
    }
    if (server == 0) {
      return res.status(204).send({message: 'No Content'})
    }
    return res.status(202).send({message: 'Accepted'})
  }).catch( error => res.status(500).send(error))
}

module.exports = {
  listarServers,
  salvarServer,
  buscarServerPorId,
  excluirServer
}
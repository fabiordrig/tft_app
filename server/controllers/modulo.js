const services = require('../services')

const listarModulos = (req, res) => {
  
  let idCliente = req.dataSession.id_cliente
  services.modulo.listarModulos(idCliente)
  .then( lista => res.status(200).send(lista))
  .catch( erro => {
    console.log(erro)
    res.status(500).send(erro)
  });
}

const salvarModulo = (req, res) => {
  let data = req.body
  let idModulo = req.params.id

  data.idCliente = req.dataSession.id_cliente
  let idServer = req.body.idServer

  return services.modulo.salvarModulo(data, idModulo, idServer).then(novoModulo => {
    res.status(201).send(novoModulo)
  }).catch(erro => {
    res.status(500).send(erro)
  })

}

const buscarModuloPorId = (req, res) => {
  
  let idCliente = req.dataSession.id_cliente
  let idModulo = req.params.id

  return services.modulo.buscarModuloPorId(idModulo, idCliente).then(busca => {
    res.status(201).send(busca)
  }).catch(erro => res.status(500).send(erro) )
}


const excluirModulo = (req, res) => {

  let idCliente = req.dataSession.id_cliente
  let idModulo = req.params.id

  return services.modulo.excluirModulo(idModulo, idCliente).then(modulo => {
    if (modulo == 1) {
      return res.status(200).send({message: 'OK'})
    }
    if (modulo == 0) {
      return res.status(204).send({message: 'No Content'})
    }
    return res.status(202).send({message: 'Accepted'})
  }).catch( error => res.status(500).send(error))
}


module.exports = {
  listarModulos,
  salvarModulo,
  buscarModuloPorId,
  excluirModulo
}
const db = require('../db/models')
const utils = require('../utils')


const listarClientes = () => {
  return db.cliente.findAll()
}

const buscarClientePorId = (idCliente) => {
  let opcoes = {
    where: {
      id_cliente: idCliente
    }
  }
  
  return db.cliente.findOne(opcoes)
}

const salvarCliente = (data, idCliente) => {
  if (!data) return utils.promessas.retornaErro('Objeto data está vazio')
  
  let cliente = {
    nome_cliente: data.nomeCliente
  }

  cliente =  utils.limpaObjeto(cliente)

  if (idCliente) {
    let opcoes = {
      where: {
        id: idCliente
      }
    }
    return db.cliente.update(cliente,opcoes)
  }
  
  return db.cliente.create(cliente)
}


const excluirCliente = async (idCliente) => {

  let opcoes = {
    where: {
      id: idCliente
    }
  }

  db.cliente.destroy(opcoes)

}

module.exports = {
  listarClientes,
  salvarCliente,
  excluirCliente,
  buscarClientePorId
}
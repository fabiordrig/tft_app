const db = require('../db/models')
const utils = require('../utils')
const Sequelize = require('sequelize');


const listarModulos = (idCliente) => {
  let opcoes = {
    where: {
      id_cliente: idCliente
    }
  }

  let bd = new Sequelize('dbicts_financeiro', 'dbsclicts', 'prdicts', {
    host: 'dbcustomers.kanban360.com',
    dialect: 'mysql'
  });
  

  return db.modulo.findAll(opcoes)
}

const buscarModuloPorId = (idModulo, idCliente) => {
  let opcoes = {
    where: {
      id_modulo: idModulo,
      id_cliente: idCliente
    }
  }

  return db.modulo.findOne(opcoes)
}

const salvarModulo = (data, idModulo, idServer) => {
  if (!data) return utils.promessas.retornaErro('Objeto data está vazio')

  let modulo = {
    teclas: data.teclas,
    apelido: data.apelido,
    usuario: data.usuario,
    json_bd_conexao: data.jsonConexao,
    id_cliente: data.idCliente
  }

  if (idModulo) {
    let opcoes = {
      where: {
        id_modulo: idModulo
      }
    }

    return db.modulo.update(modulo, opcoes)
  }

  return db.modulo.create(modulo).then(monit => {
    let novoMonit = {
      id_modulo: monit.id_modulo,
      id_server: idServer
    }
    return db.server_modulos.create(novoMonit)
  }).catch(err => console.log(err))

}

const excluirModulo = (idModulo, idCliente) => {
  let opcoes = {
    where: {
      id_cliente: idCliente,
      id_modulo: idModulo
    }
  }

  return db.modulo.destroy(opcoes).then()
    .catch(err => console.log(err))

}


module.exports = {
  listarModulos,
  buscarModuloPorId,
  salvarModulo,
  excluirModulo
}
const db = require('../db/models')
const utils = require('../utils')

const listarRobos = (idServer, idModulo) => {
  let opcoes = {
    where: {
      id_server: idServer,
      id_modulo: idModulo
    }
  }

  return db.robos.findAll(opcoes)
}

const buscarRoboPorId = (idRobo) => {
  let opcoes = {
    where: {
      id_robo: idRobo
    }
  }
  return db.robos.findOne(opcoes)
}

const buscarRobosPorServer = (idServer) => {
  let opcoes = {
    where: {
      id_server: idServer
    }
  }
  return db.robos.findAll(opcoes)
}

const buscarRobosPorModulo = (idModulo, idCliente) => {
  let opcoes = {
    where: {
      id_modulo: idModulo,
      id_cliente: idCliente
    }
  }
  return db.robos.findAll(opcoes)
}


const salvarRobo = (data, idRobo) => {
  if (!data) return utils.promessas.retornaErro('Objeto data está vazio')

  
  let robos = {
    apelido: data.apelido,
    status: data.status,
    id_server: data.idServer,
    id_modulo: data.idModulo
  }

  if (idRobo) {
    
    let opcoes = {
      where: {
        id_robo: idRobo
      }
    }

    return db.robos.update(robos, opcoes).then()
    .catch(err => console.log(err))
  }

  return db.robos.create(robos).then()
    .catch(err => console.log(err))

}

const excluirRobo = (idRobo) => {
  let op = {
    where: {
      id_robo: idRobo
    }
  }

  return db.robos.destroy(op).then()
  .catch(err => console.log(err))
}


module.exports = {
  listarRobos,
  buscarRoboPorId,
  buscarRobosPorServer,
  buscarRobosPorModulo,
  salvarRobo,
  excluirRobo
}
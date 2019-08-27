const db = require('../db/models')
const utils = require('../utils')

const listarServers = (idCliente) => {
  let opcoes = {
    where: {
      id_cliente: idCliente
    }
  }

  return db.servers.findAll(opcoes)
}


const buscarServerPorId = (idServer, idCliente) => {
  let opcoes = {
    where: {
      id_server: idServer,
      id_cliente: idCliente
    }
  }
  return db.servers.findOne(opcoes)

}

const salvarServer = (data, idServer) => {
  if (!data) return utils.promessas.retornaErro('Objeto data está vazio')

  
  let server = {
    apelido: data.apelido,
    nome_maquina: data.nomeMaquina,
    ip_server: data.ipServer,
    mac_address: data.macAddress,
    status: data.status,
    qtd_robos: data.qtdRobos,
    qtd_cpu: data.qtdCpu,
    qtd_disco_livre: data.qtdDiscoLivre,
    qtd_disco_uso: data.qtdDiscoEmUso,
    qtd_memoria_ram_livre: data.qtdMemoriaRamLivre,
    qtd_memoria_ram_uso: data.qtdMemoriaRamEmUso,
    dth_ultima_inicializacao: data.dataInicializacao,
    id_cliente: data.idCliente
  }

  if (idServer) {
    let opcoes = {
      where: {
        id_server: idServer
      }
    }
    return db.servers.update(server, opcoes)
  }

  return db.servers.create(server)

}

const excluirServer = (idServer, idCliente) => {
  let opcoes = {
    where: {
      id_cliente: idCliente,
      id_server: idServer
    }
  }

  return db.servers.destroy(opcoes)

}


module.exports = {
  listarServers,
  buscarServerPorId,
  salvarServer,
  excluirServer
}
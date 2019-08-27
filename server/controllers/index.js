const cliente = require('./cliente')
const modulo = require('./modulo')
const servers = require('./servers')
const robos = require('./robos')

//auth
const autenticacao = require('./autenticacao')

module.exports = {
  autenticacao,
  cliente,
  modulo,
  servers,
  robos
}
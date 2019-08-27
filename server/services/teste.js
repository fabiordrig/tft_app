const utils = require('../utils')
const Sequelize = require('sequelize');


const conectarBanco = (config) => {
  let bd = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql'
  });
  
  return bd.authenticate()
    .then(() => {
      console.log('Conexão com o banco foi estabelecida com sucesso!.');
    })
    .catch(err => {
      console.error('Não foi possivel me conectar ao banco:', err);
    });

    let qry = `SELECT * FROM processamentos`
    bd.query(qry, null, { raw: true})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    })
} 

module.exports = {
  conectarBanco
}
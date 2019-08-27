'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const moment = require('moment')
const sequelize_fixtures = require('sequelize-fixtures');

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//RELACIONAMENTOS DE TABELAS
db.cliente.hasMany(db.modulo, {foreignKey: 'id_cliente', as: 'clienteModulo'})
db.modulo.belongsTo(db.cliente, {foreignKey: 'id_cliente', as: 'moduloCliente'})

db.cliente.hasMany(db.servers, {foreignKey: 'id_cliente', as: 'clienteServer'})
db.servers.belongsTo(db.cliente, {foreignKey: 'id_cliente', as: 'serverCliente'})

db.servers.hasMany(db.server_modulos, {foreignKey: 'id_server', as: 'serverMonit'})
db.server_modulos.belongsTo(db.servers, {foreignKey: 'id_server', as: 'monitServer'})

db.modulo.hasMany(db.server_modulos, {foreignKey: 'id_modulo', as: 'monitModulo'})
db.server_modulos.belongsTo(db.modulo, {foreignKey: 'id_modulo', as: 'moduloMonit'})

db.servers.hasMany(db.robos, {foreignKey: 'id_server', as: 'serverRobo'})
db.robos.belongsTo(db.servers, {foreignKey: 'id_server', as: 'roboServer'})

db.modulo.hasMany(db.robos, {foreignKey: 'id_modulo', as: 'roboModulo'})
db.robos.belongsTo(db.modulo, {foreignKey: 'id_modulo', as: 'moduloRobo'})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const SINCRONIZAR = false
const FORCE_DB = false
const FORCE_INSERT_DB = false

// this create table if not exists
if( SINCRONIZAR ) {
  sequelize.sync({force: FORCE_DB}).then( () => {

    if(FORCE_DB || FORCE_INSERT_DB) {

      sequelize_fixtures.loadFile(`${__dirname}/../data_import/*.json`, db, {
          modifyFixtureDataFn: (data) => {
            return data;
          }
      }).then( () => {
          console.info('Import de dados de teste finalizado com sucesso.');
      }).catch( (err) =>  console.error(err));
    }
  })
}

module.exports = db;

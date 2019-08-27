module.exports = function(sequelize, DataTypes) {
  return sequelize.define('server_modulos', {
    id_monit: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
    },
    id_server: {
      field: 'fk_id_server',
			type: DataTypes.INTEGER,
      allowNull: false,
		},
    id_modulo: {
      field: 'fk_id_modulo',
			type: DataTypes.INTEGER,
      allowNull: false,
		}
  },{
		tableName: 'server_modulos',
		timestamps: true
	});
}
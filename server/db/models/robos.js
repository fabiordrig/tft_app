/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('robos', {
    id_robo: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
    },
    apelido: {
			type: DataTypes.STRING(45),
      allowNull: true,
    },
    status: {
			type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
		tableName: 'robos',
		timestamps: true
  })
};
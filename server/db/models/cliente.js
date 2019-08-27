/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id_cliente: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
    },
    nome_cliente: {
			type: DataTypes.STRING,
      allowNull: false
		},
  }, {
		tableName: 'cliente',
		timestamps: true
	});
}
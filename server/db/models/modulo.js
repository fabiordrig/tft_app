/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modulo', {
    id_modulo: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
    },
    teclas: {
			type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    apelido: {
			type: DataTypes.STRING(45),
      allowNull: true,
		},
    usuario: {
			type: DataTypes.STRING(45),
      allowNull: true,
		},
    json_bd_conexao: {
			type: DataTypes.STRING(1000),
      allowNull: true,
		},
    id_cliente: {
      field: 'fk_id_cliente',
			type: DataTypes.INTEGER,
      allowNull: false,
		},
  }, {
		tableName: 'modulo',
		timestamps: true
	});
}
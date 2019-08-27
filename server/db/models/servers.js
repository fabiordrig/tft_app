/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servers', {
    id_server: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
    },
    apelido: {
			type: DataTypes.STRING(45),
      allowNull: true,
		},
    nome_maquina: {
			type: DataTypes.STRING(80),
      allowNull: true,
		},
    ip_server: {
			type: DataTypes.STRING(45),
      allowNull: true,
		},
    mac_address: {
			type: DataTypes.STRING(45),
      allowNull: true,
		},
    status: {
			type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
		},
    qtd_robos: {
			type: DataTypes.INTEGER,
      allowNull: true,
		},
    qtd_cpu: {
			type: DataTypes.INTEGER,
      allowNull: true,
    },
    qtd_disco_livre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    qtd_disco_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    qtd_memoria_ram_livre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    qtd_memoria_ram_uso: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dth_ultima_inicializacao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    id_cliente: {
      field: 'fk_id_cliente',
			type: DataTypes.INTEGER,
      allowNull: false,
		}
  },{
		tableName: 'servers',
		timestamps: true
	})
}
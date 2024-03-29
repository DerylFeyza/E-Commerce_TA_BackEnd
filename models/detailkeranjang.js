"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class detailkeranjang extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	detailkeranjang.init(
		{
			id_keranjang: DataTypes.INTEGER,
			id_produk: DataTypes.INTEGER,
			quantity: DataTypes.INTEGER,
			total: DataTypes.INTEGER,
			checkedout: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "detailkeranjang",
		}
	);
	return detailkeranjang;
};

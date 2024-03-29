"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("detailkeranjangs", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_keranjang: {
				type: Sequelize.INTEGER,
				references: {
					model: "keranjangusers",
					key: "id",
				},
			},
			id_produk: {
				type: Sequelize.INTEGER,
				references: {
					model: "produks",
					key: "id",
				},
			},
			quantity: {
				type: Sequelize.INTEGER,
			},
			total: {
				type: Sequelize.INTEGER,
			},
			checkedout: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("detailkeranjangs");
	},
};

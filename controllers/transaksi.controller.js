const produkModel = require("../models/index").produk;
const cartModel = require("../models/index").keranjanguser;
const cartDetailsModel = require("../models/index").keranjangitem;
const Op = require("sequelize").Op;

exports.productToCart = async (request, response) => {
	let cartData = {
		id_user: request.body.id_user,
		// totalharga: request.body.totalharga,
		status: "draft",
	};
	const iduser = cartData.id_user;
	const checkExistingCart = await cartModel.findOne({
		where: { id_user: iduser, status: "draft" },
	});
	if (checkExistingCart) {
	} else {
		cartModel
			.create(cartData)
			.then((result) => {
				let id_keranjang = result.id;
				let detailsoforder = request.body.detailsoforder;
				for (let i = 0; i < detailsoforder.length; i++) {
					detailsoforder[i].id_keranjang = id_keranjang;
				}

				cartDetailsModel
					.bulkCreate(detailsoforder)
					.then((result) => {
						return response.json({
							success: true,
							message: "new cart and product has been inserted to the cart",
						});
					})
					.catch((error) => {
						return response.json({
							success: false,
							message: error.message,
						});
					});
			})
			.catch((error) => {
				return response.json({
					success: false,
					message: error.message,
				});
			});
	}
};

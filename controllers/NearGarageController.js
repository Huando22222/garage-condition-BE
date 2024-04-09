const NearGarage = require('../models/NearGarages');
module.exports = {
	GetNearGarages: async (req, res) => {
		try {
			const nearGarages = await NearGarage.find();
      console.log(nearGarages.length);
			res.status(200).json({
				message: "get near garages successfully",
				data: nearGarages,
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Server Error" });
		}
	},

	GetNearGaragesHaha: async (req, res) => {
		try {
			const haha = await Haha.find();
			console.log(haha.length);
			res.status(200).json({
				message: "Post location marked as deleted successfully",
				data: haha,
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Server Error" });
		}
	},
};
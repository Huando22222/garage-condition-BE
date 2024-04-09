const Event = require("../models/Events");
module.exports = {
	GetEvent: async (req, res) => {
		try {
			const event = await Event.find();
     		console.log(event.length);
			res.status(200).json({
				message: "get event successfully",
				data: event,
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Server Error" });
		}
	},
	NewEvent: async (req, res) => {
		try {
			const { eventName, eventDescription, eventDate, vehicleCount } =
				req.body;
			const images = req.file ? req.file.filename : "";
			console.log(
				images,
				eventName,
				eventDescription,
				eventDate,
				vehicleCount
			);
			// imageUrl: { type: "string", required: true },
			// eventName: { type: "string", required: true },
			// eventDescription: { type: "string", required: true },
			// eventDate: { type: Date, required: true },
			// vehicleCount: { type: Number, required: true },

			const event = new Event({
				imageUrl: images,
				eventName: eventName,
				eventDescription: images,
				eventDate: eventDate,
				vehicleCount: vehicleCount,
			});

			await event
				.save()
				.then(() => {
					res.status(200).json({
						message: "new Even add successful",
					});
					console.log("new Even add successful");
				})
				.catch((err) => console.log(err));
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Internal Server Error" });
		}
	  },
	GetEventHaha: async (req, res) => {
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
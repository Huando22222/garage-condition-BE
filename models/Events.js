const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    // images,
	// eventName,
	// eventDescription,
	// eventDate,
	// vehicleCount
	imageUrl: { type: "string", required: true },
	eventName: { type: "string", required: true },
	eventDescription: { type: "string", required: true },
	eventDate: { type: Date, required: true },
	vehicleCount: { type: Number, required: true },
});

module.exports = mongoose.model('Event', eventSchema);

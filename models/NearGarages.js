const mongoose = require('mongoose');

const nearGarages = new mongoose.Schema(
    {
        name: { type: "string", required: true },
        imageUrl: { type: "string", required: true },
        address: {type: "string" ,required: true},
        description: {type: "string" ,required: true},
        google_maps_link: {type: "string" ,required: true},
        directions_link: {type: "string" ,required: true},
        number: {type: Number ,required: true}
    }
);

module.exports = mongoose.model("neargarages", nearGarages);

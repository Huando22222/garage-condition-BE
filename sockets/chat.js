const Room = require("../models/Rooms");
const User = require("../models/Users");
// function generateRandomRoomName(length) {
// 	const characters =
// 		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 	let result = "";
// 	for (let i = 0; i < length; i++) {
// 		const randomIndex = Math.floor(Math.random() * characters.length);
// 		result += characters.charAt(randomIndex);
// 	}
// 	return result;
// }

module.exports = function (io) {
	let campusAB = Math.floor(Math.random() * (1001 - 500) + 500);

	const adjustValue = (value) => {
		if (value <= 100) {
			return Math.floor(Math.random() * (10 - 2 + 1)) + 2; // Random increment between 2 to 10
		} else if (value >= 2000) {
			return -1 * (Math.floor(Math.random() * (10 - 2 + 1)) + 2); // Random decrement between 2 to 10
		} else {
			if (Math.random() < 0.5) {
				return Math.floor(Math.random() * (10 - 2 + 1)) + 2; // Random increment between 2 to 10
			} else {
				return -1 * (Math.floor(Math.random() * (10 - 2 + 1)) + 2); // Random decrement between 2 to 10
			}
		}
	};

	const increaseCampusAB = () => {
		const randomIncrement = adjustValue(campusAB);
		campusAB = Math.min(campusAB + randomIncrement, 2000);
		campusAB = Math.max(campusAB, 100); // Ensure minimum value is 100
		io.emit("garage-campus-AB", campusAB);
	};

	const decreaseCampusAB = () => {
		const randomDecrement = adjustValue(campusAB);
		campusAB = Math.max(campusAB - randomDecrement, 100);
		campusAB = Math.min(campusAB, 2000); // Ensure maximum value is 2000
		io.emit("garage-campus-AB", campusAB);
		console.log("Campus: " +campusAB);
	};

	const interval = setInterval(increaseCampusAB, 5000);
	const decrementInterval = setInterval(decreaseCampusAB, 2000);

	io.on("connection", (socket) => {
		console.log(`Chat Socket connected: ${socket.id}`);

		socket.on("disconnect", () => {
			console.log(`disconnect : ${socket.id}`);
		});
	});
};

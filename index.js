// const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const route = require("./routes");


////socket zone
const server = require("http").Server(app);
const io = require("socket.io")(server, {
	cors: {
		// origin: "http://localhost:3000", 
		origin: "http://localhost:4200",
	},
});
require('./sockets/chat')(io);

app.use(express.static('public'));
const port = 3000;

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		console.log(
			"db connected\n----------------------------------------------------"
		)
	)
	
app.use(cors());
// const corsOptionsRoute1 = {
// 	origin: "http://example.com/route1",
// 	methods: "GET,PUT",
// };
app.use(
	express.json({
		/*limit: "10mb",*/
	})
);
app.use(express.urlencoded({ /*limit: "10mb",*/ extended: true }));

route(app);
//app.listen
server.listen(process.env.PORT || port, () =>
	console.log(
		`Example app listening on port ${process.env.PORT}!\nhttp://cmd => ipconfig:${process.env.PORT}\nhttp://192.168.1.47:${process.env.PORT}\n(depending on your ipconfig address)`
	)
);

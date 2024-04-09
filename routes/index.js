const userRouter = require("./users");
const nearGaragesRouter = require("./nearGarages");
const eventRouter = require("./events");
function route(app) {
	app.use("/user", userRouter);
	app.use("/event", eventRouter);
	app.use("/", nearGaragesRouter);
}

module.exports = route;

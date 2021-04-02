const express = require("express");
// const helmet = require("helmet");
// const xss = require("xss-clean");
// const rateLimit = require("express-rate-limit");

// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // limit each IP to 100 requests per windowMs
// });

// // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc) see https://expressjs.com/en/guide/behind-proxies.html
// app.set("trust proxy", 1);

// app.use(express.json());
// app.use(helmet());
// app.use(limiter);
// app.use(xss());

// Sub Applications =====================

const kevApp = require("./apps/kevinrobertandrews/app");
const raiseApp = require("./apps/raisemymarks/app");

// Main Entry point =====================

const app = express();

app.use("/", kevApp);
app.use('/raisemymarks', raiseApp);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}...`);
});

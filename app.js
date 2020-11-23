const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');
const xss = require('xss-clean');

const rateLimit = require("express-rate-limit");

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 12 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

const JSONdb = require('simple-json-db');
const db = new JSONdb('.//database.json');

// app.use(express.static('./client/build'))
app.use(express.static('./christmas-cards/build'));

app.use(helmet());
app.use(xss())
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
// 	res.sendFile("./client/build/index.html");
// })

app.get('/christmas-cards', (req, res) => {
	res.sendFile('index.html', { root: "./christmas-cards/build" });
})

app.post('/post-test', (req, res) => {
	const { name, address } = req.body

	if (!name) {
		return res.send("No name sent")
	}
	if (!address) {
		return res.send("No address sent")
	}

	db.set(name, { address: address });

	res.send(req.body);
});


const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}...`);
})
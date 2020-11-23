const path = require('path')
const express = require('express')
const cors = require('cors');
const app = express();

const JSONdb = require('simple-json-db');
const db = new JSONdb('.//database.json');

// app.use(express.static('./client/build'))
app.use(express.static('./christmas-cards/build'));

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
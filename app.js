const express = require('express')
const cors = require('cors');
const app = express();

app.use(express.static('./client/build'))

app.use(cors());
app.use(express.urlencoded());

app.get('/', (req, res) => {
	res.sendFile("./client/build/index.html");
})

app.get('/post-test', (req, res) => {
	res.send("Posted data...")
})

app.post('/post-test', (req, res) => {
	const { name, address } = req.body
	console.log(name, address)
	res.status(200).send({name, address});
})

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}...`);
})
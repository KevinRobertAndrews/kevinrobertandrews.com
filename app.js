const express = require('express')
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile("./public/index.html");
})

app.get('/tea', (req, res) => {
	res.set("X-", "TeaTime");
	res.status(418);
	res.send('I like coffee!');
})


app.listen(3000, () => {
	console.log("Server running on PORT 3000")
})

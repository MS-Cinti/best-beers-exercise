const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 9000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile( path.join(`${__dirname}/../frontend/index.html`))
});

app.use("/dog", express.static(`${__dirname}/../frontend/public`));

app.listen(port, () => {
	console.log(`http://127.0.0.1:${port}`)
});
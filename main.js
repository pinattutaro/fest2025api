const express = require('express');
const app = express();
const port = 9000;
const host = "0.0.0.0";

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/4u/reader.html');
});

app.listen(port, host, () => {
    console.log(`Example app listening on http://${host}:${port}`);
});
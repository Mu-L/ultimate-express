// must support res.sendFile()

const express = require("express");

const app = express();

app.get('/test', (req, res) => {
    res.sendFile('src/index.js', { root: "." });
});

app.listen(13333, async () => {
    console.log('Server is running on port 13333');

    const response = await fetch('http://localhost:13333/test');
    console.log(await response.text(), response.headers.get('Content-Type').toLowerCase());
    process.exit(0);
});
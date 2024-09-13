// must support res.vary()

import express from "express";

const app = express();

app.get('/test', (req, res) => {
    res.vary('X-Test');
    res.vary('Set-Cookie');
    res.send('test');
});

app.listen(13333, async () => {
    console.log('Server is running on port 13333');

    const response = await fetch('http://localhost:13333/test');
    console.log(response.headers.get('Vary'));
    process.exit(0);
});
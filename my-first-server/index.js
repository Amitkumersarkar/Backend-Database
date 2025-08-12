const express = require('express');
const app = express();
const port = 2000;
app.get('/', (req, res) => {
    res.send('hello from my first ever server');

})
app.get('/data', (req, res) => {
    res.send('more data available soon wait');
})
app.listen(port, () => {
    console.log(`my first server is running on port : ${port}`)
})
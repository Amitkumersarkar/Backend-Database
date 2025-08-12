// importing something by require
const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 2500;
app.get('/', (req, res) => {
    res.send('my phone information coming soon on next month')
})
app.get('/phones', (req, res) => {
    res.send(phones);
})
// dynamic id showing
app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('i need data for id : ', id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})
app.listen(port, () => {
    console.log(`my phone server is running on port : ${port}`);
})
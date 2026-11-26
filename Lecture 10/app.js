const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const PORT=3000;
const app = express();

app.use(function(req, res, next) {
    console.log(`'First Middleware' ${req.method} ${req.url}`);
    next();
});

app.use(function(req, res, next) {
    console.log(`'Second Middleware' ${req.method} ${req.url}`);
    next();
});

// app.use(function(req, res, next) {
//     console.log(`'Third Middleware' ${req.method} ${req.url}`);
//     res.send('<h1>Response from the third middleware</h1>');
// });

app.get('/', (req, res,next) => {
    console.log(`'GET / route handler' ${req.method} ${req.url}`);
    res.send('<h1>Response from the GET / route</h1>');
});

app.get('/contact-us', (req, res,next) => {
    console.log(`'GET /contact-us route handler' ${req.method} ${req.url}`);
    res.send(`<h1>Give your details</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
        </form>
        `);
});

app.use(bodyParser.urlencoded());

app.post('/contact-us', (req, res,next) => {
    console.log(`'POST /contact-us route handler' ${req.method} ${req.url} ${req.body}`);
    res.send('<h1>Thank you for submitting your details</h1>');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
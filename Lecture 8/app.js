//Core module
const http = require('http');
//external module
const express = require('express');
//local module
const greetings = require('./user');

const PORT = 3000;


const app = express();
app.use(function(req, res, next){
    console.log('Middleware 1');
    next();
});
app.use(function(req, res, next){
    console.log('Middleware 2');
    res.send('<h1>Hello World</h1>');
});




 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });
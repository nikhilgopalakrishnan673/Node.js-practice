const http = require('http');
const data = require('./data.js');

const server=http.createServer(data);

const PORT = 3001;
server.listen(PORT,function () {
    console.log(`Server is running on port ${PORT}`);
})
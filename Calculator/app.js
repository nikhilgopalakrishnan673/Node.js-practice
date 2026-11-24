const http= require('http');
const home= require('./home.js');
const server=http.createServer(home);

const PORT = 3001;
server.listen(PORT,function () {
    console.log(`Server is running on port ${PORT}`);
})
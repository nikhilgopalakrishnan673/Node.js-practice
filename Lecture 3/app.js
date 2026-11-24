const http = require('http');


const server=http.createServer(function (req, res) {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
    }else if(req.url === '/products'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Products</title></head>');
        res.write('<body><h1>Products</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Default page</title></head>');
        res.write('<body><h1>Deafault reponse</h1></body>');
        res.write('</html>');
        return res.end();
    
   
    process.exit()
})


const PORT = 3001;
server.listen(PORT,function () {
    console.log(`Server is running on port ${PORT}`);
})
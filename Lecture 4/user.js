const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

        res.write(`<html>
    <head><title>My First Page</title></head>
    <body>
    <head>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </head>
    </body>
    </html>`);

    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>HOME PAGE</h1></body>');
        res.write('</html>');
    }else if (req.url === '/men') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>MEN PAGE</h1></body>');
        res.write('</html>');
    }else if (req.url === '/women') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>WOMEN PAGE</h1></body>');
        res.write('</html>');
    }else if (req.url === '/kids') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>KIDS PAGE</h1></body>');
        res.write('</html>');
    }else if (req.url === '/cart') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>CART PAGE</h1></body>');
        res.write('</html>');
    }



    res.end();
})
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
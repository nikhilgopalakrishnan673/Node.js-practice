const http = require('http');
 const PORT = 3000;

 const server = http.createServer((req, res) => {
    console.log(req.url);
  res.write('<h1>Hello World</h1>');
  res.end();
 });
 server.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });
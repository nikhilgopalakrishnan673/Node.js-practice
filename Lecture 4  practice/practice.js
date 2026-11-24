const http = require('http');
const fs = require('fs');

const server=http.createServer(function (req, res) {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<label for="name">Name:</label>');
        res.write('<input type="text" id="name" name="username"><br><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female"><br><br>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>')
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else if(req.url === '/submit-details' && req.method === 'POST'){
        fs.writeFileSync('user.txt', 'User details submitted successfully');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Default page</title></head>');
        res.write('<body><h1>Form submitted successfully</h1></body>');
        res.write('</html>');
        return res.end();
    
   
    process.exit()
})


const PORT = 3001;
server.listen(PORT,function () {
    console.log(`Server is running on port ${PORT}`);
})
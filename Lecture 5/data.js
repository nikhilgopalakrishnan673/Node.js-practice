
const fs = require('fs');

const handleRequest = function (req, res) {
    console.log(req.url, req.method);
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
        const body = [];
        req.on('data', function (chunk) {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', function () {
            const fullData = Buffer.concat(body).toString();
            console.log(fullData);
            const params = new URLSearchParams(fullData);
            // const userDetails = {};
            // for(const [key,value] of params.entries()){
            //     userDetails[key] = value;
            // }
            const userDetails = Object.fromEntries(params.entries());
            console.log(userDetails);
            fs.writeFileSync('user.txt', JSON.stringify(userDetails));

        });
        
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
}

module.exports = handleRequest;



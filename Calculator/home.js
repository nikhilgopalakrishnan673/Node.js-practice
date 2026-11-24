const addresult = require('./addition.js');
const handleRequest = function (req, res) {

    console.log(req.url, req.method);
    
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome to my Node.js Server!</h1>');
        res.write('<a href="/calculator">Go to Calculator</a>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    
    else if(req.url === '/calculator' && req.method === 'GET'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body><h1>Calculator</h1>');
        res.write('<form action="/calculate-result" method="POST">');
        res.write('<label for="num1">Number 1:</label>');
        res.write('<input type="number" id="num1" name="num1"><br><br>');
        res.write('<label for="num2">Number 2:</label>');
        res.write('<input type="number" id="num2" name="num2"><br><br>');
        res.write('<input type="submit" value="Sum">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(req.url === '/calculate-result' && req.method === 'POST'){
        res.setHeader('Content-Type', 'text/html');
        addresult(req, res);
        

    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 Page Not Found</h1>');


    }


        

}

module.exports = handleRequest;

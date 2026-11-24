const fs = require('fs');
const handleRequest = function (req, res) {

    console.log(req.url, req.method);
    
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1>');
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
        res.write('<form action="/calculate" method="POST">');
        res.write('<label for="num1">Number 1:</label>');
        res.write('<input type="number" id="num1" name="num1"><br><br>');
        res.write('<label for="num2">Number 2:</label>');
        res.write('<input type="number" id="num2" name="num2"><br><br>');
        res.write('<input type="submit" value="Sum of Two Numbers">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }if(req.url === '/calculate' && req.method === 'POST'){
        const body = [];
        req.on('data', function(chunk){
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', function(){
            const fullData = Buffer.concat(body).toString();
            const params = new URLSearchParams(fullData);
            const twoNumbers = Object.fromEntries(params.entries());
            fs.writeFileSync('numbers.txt', JSON.stringify(twoNumbers));
            const sum = parseInt(twoNumbers.num1) + parseInt(twoNumbers.num2);
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Result</title></head>');
            res.write(`<body><h1>Sum of ${twoNumbers.num1} and ${twoNumbers.num2} is: ${sum}</h1></body>`);
            res.write('</html>');
            res.end();
        });
           process.exit()
}}

module.exports = handleRequest;

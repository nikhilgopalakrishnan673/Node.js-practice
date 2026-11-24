const additionProcess = (req, res) => {
        const body = [];
            req.on('data', function(chunk){
            console.log(chunk);
            body.push(chunk);
        });
            req.on('end', function(){
            const fullData = Buffer.concat(body).toString();
            const params = new URLSearchParams(fullData);
            const twoNumbers = Object.fromEntries(params.entries());
            const sum = parseInt(twoNumbers.num1) + parseInt(twoNumbers.num2);
           res.setHeader('Content-Type', 'text/html');
           res.write(`<html>
            <head>
            <title>Result</title>
            </head>
            <body>
            <h1>Sum of ${twoNumbers.num1} and ${twoNumbers.num2} is: ${sum}</h1>
            </body>
            </html>
            `);
            res.end();
        });
          
}
module.exports = additionProcess;
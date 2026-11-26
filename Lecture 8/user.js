const greetings=function(req, res){
    console.log(req.url);
    res.write('<h1>Hello World</h1>');
    res.end();
}
module.exports=greetings;
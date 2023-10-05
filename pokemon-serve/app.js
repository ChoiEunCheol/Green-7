const http = require("http");

const server = http.createServer(function(request, response){
    // console.log(typeof(request)); //object
    // console.log(typeof(response)); //object
    response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    
    let doc = `<html><head><body><h1> 오 된다 </h1></body></head></html>`

    response.end(doc);
});

server.listen(1234);
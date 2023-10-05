const http = require("http");

const server = http.createServer(function(request, response){
    console.log(request); 
    console.log(response); 

    // 한글 깨짐을 방지하려면 charset = utf-8을 적어야 함. 
    response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    
    let doc = `<html><head><body><h1> 오 된다 </h1></body></head></html>`

    response.end(doc);
});

server.listen(1234);
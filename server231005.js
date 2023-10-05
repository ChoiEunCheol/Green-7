const http = require("http");
// const fs = require("fs");

http.createServer(function(request, response){
    response.writeHead(200,"text/html")
    response.end("end");
})
.listen(8080)

const http = require("http");

const server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    if(request.url === "/"){
        let doc = `<html><head><body><h1 id = "h1">메인페이지</h1><a href="http://localhost:1234/sub">서브로 이동하기<br></a></body></head></html>`
        let aaa = `<html><head><body><a href="javascript:alert('알림');" style="font-weight:bold; color:red; font-size: 500px">알림창 띄우기</a></body></head></html>`
        let bbb = `<html><head><body><h1></h1><a href="#">맨위로<br></a></body></head></html>`
        let ccc = `<html><head><body><h1>ㅇㅅㅇ</h1></body></head></html>`
        let ddd = `<html><head><body><h1></h1><a href="#h1">id로 포커스 이동<br></a></body></head></html>`

        response.write(doc);
        response.write(aaa);
        response.write(bbb);
        response.end(ddd);
    }
    if(request.url === "/sub"){
        let doc = `<html><head><body><h1>서브페이지</h1><a href="http://localhost:1234">메인으로 이동하기</a></body></head></html>`
        response.end(doc);
    }
});

server.listen(1234);

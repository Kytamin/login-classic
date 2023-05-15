const http = require('http');

const server = http.createServer(function (req, res) {
    let txt = ""
    if(req.url === "/login") {
        res.send ("Login success");
    } else {
        res.send("Login fail") ;
    }
    res.end(txt);
})
server.listen(8080,'localhost',()=>{
    console.log('Server on')
})
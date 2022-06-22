const http = require("http");

http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        if ( req.url === "/produto"){
            res.end(JSON.stringify({
                Response: "product route!"
            }))
        }

        if (req.url === "/usuario"){
            res.end(JSON.stringify({
                Response: "user route!"
            }))
        }

        res.end(JSON.stringify({
            Response: "404 - page not found!"
        }))
    })
    .listen(4001, () => console.log("Servidor está rodando na porta 4001"));
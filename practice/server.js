const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    let users =[]
    if (req.url === '/') {

        res.writeHead("200", {"Content-Type" : "text/html"})
        fs.createReadStream('./index.html').pipe(res)

    }else if (req.url === "/submit" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
              console.log("Raw:", body);

            const params = new URLSearchParams(body);

            const user = {
                name: params.get("name"),
                email: params.get("email"),
                password: params.get("password")
            };
            console.log("Received:", user);

            fs.writeFileSync("log.txt", JSON.stringify(user, null, 2));
            users.push(user)

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(user));
        });

    }else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Method or route not allowed");
    }
})

server.listen("5000", () => {
    console.log("Server has started already ooo")
})
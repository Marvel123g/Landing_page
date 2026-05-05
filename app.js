// // var fs = require('fs')

// // var readme = fs.readFile('readMe.txt', 'utf8', function(err, data){
// //     fs.writeFile('writeMe.txt', data, function(){})
// // })

// // // fs.writeFileSync('writeMe.txt', readme)

// // // console.log(readme)

// var http = require('http')
// var fs = require('fs')

// // myReadStream.on('data', function(chunk) {
// //     console.log('new chunk received:') 
// //     // console.log(chunk)
// //     myWriteStream.write(chunk)
// // })

// let userData = []

// var server = http.createServer(function(req, res){
//     // console.log("Request was made: " + req.url)

//      if (req.method === 'GET' && req.url === '/') {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/index.html').pipe(res);

//     }   else if (req.method === 'POST' && req.url === '/home') {

//         let body = '';

//         req.on('data', chunk => {
//             body += chunk.toString();
//         });

//         req.on('end', () => {

//             try {
//                 const newUser = JSON.parse(body);
//                 const data = newUser.details
//                 userData.push(data);

//                 res.writeHead(201, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({
//                     message: "User Added Successfully",
//                     userData
//                 }));

//             } catch (err) {
//                 res.writeHead(400, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({
//                     error: "Invalid JSON sent from client"
//                 }));
//             }
//         });
//     }

//     // else {
//     //     res.writeHead(404, {
//     //         "Content-Type": "text/html"
//     //     })
//     //     res.end("This is a bad request")
//     // }
//     // res.writeHead(200, {'Content-Type': 'application/json'})
//     // res.end(JSON.stringify(userData))


//     // var myObj = {
//     //     name: 'ryu',
//     //     job: "ninja",
//     //     age: 29
//     // }
    
//     // // var myReadStream = fs.createReadStream(__dirname + '/index.html')
//     // // myReadStream.pipe(JSON.stringify(myObj))
//     // res.end(JSON.stringify(myObj))
// })

// server.listen(3000, '127.0.0.1')
// console.log("Server is listening on port 127.0.0.1:3000")



// var express = require("express")

// const app = express()

// app.set("view engine", 'ejs')
// app.get("/", function(req, res) {
//     res.send("This is the homepage")
// })

// app.get('/profile/:id', function(req, res) {
//     res.send("You requested to see the profile with the id of " + req.params.id) 
// })
// app.listen("3000")

// const http = require("http");

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (url === "/" && method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Welcome to the Home Page");
//     } 
//     else if (url === "/about" && method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("This is the About Page");
//     } 
//     else {
//         // THE CATCH-ALL (404)
//         // If no routes match, we MUST send a response
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("404: Resource not found on this server");
//     }
// });

// server.listen(3000, () => console.log("Teacher bot active on port 3000"));


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // ROUTE 1: The Home Page
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./index.html').pipe(res);
    } 

    // ROUTE 2: The CSS (Crucial step!)
    else if (url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.createReadStream('./style.css').pipe(res);
    }

    // ROUTE 3: Handling the Form Submission
    else if (url === '/submit' && method === 'POST') {
        let body = [];

        // Listen for data chunks
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // Once all chunks arrive
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("Form Data Received:", parsedBody);
            fs.writeFile("log.txt" , parsedBody, () => {
                console.log("Saved Successfully")
            })
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Thanks!</h1><p>We got: ${parsedBody}</p>`);
        });
    }

    // ROUTE 4: 404 Not Found
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
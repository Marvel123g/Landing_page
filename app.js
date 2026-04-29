// var fs = require('fs')

// var readme = fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('writeMe.txt', data, function(){})
// })

// // fs.writeFileSync('writeMe.txt', readme)

// // console.log(readme)

var http = require('http')
var fs = require('fs')

// myReadStream.on('data', function(chunk) {
//     console.log('new chunk received:') 
//     // console.log(chunk)
//     myWriteStream.write(chunk)
// })

var server = http.createServer(function(req, res){
    console.log("Request was made: " + req.url)

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        })
        res.end("This is a bad request")
    }

    // var myObj = {
    //     name: 'ryu',
    //     job: "ninja",
    //     age: 29
    // }
    
    // // var myReadStream = fs.createReadStream(__dirname + '/index.html')
    // // myReadStream.pipe(JSON.stringify(myObj))
    // res.end(JSON.stringify(myObj))
})

server.listen(3000, '127.0.0.1')
console.log("Server is listening on port 3000")
// const http = require('http')

// http.createServer((request, response) => {
//     if (request.url === "/") {
//         response.write("Welcome tokkkk Home Page")
//     } 
//     else if (request.url === "/contact") {
//         response.write("Contact Page")
//     } 
//     else {
//         response.write("404 Page Not Found")
//     }

//     response.end()
// }).listen(3000)

// console.log("Server Running on http://localhost:3000")

const http = require("http")

http.createServer((req, res) => {
    const path = req.url;
    const method = req.method
    console.log(path, method)

    if (path.includes("/abc") && method == 'GET') {
        res.write("homepage")
        res.end()
    } else {
        res.write("Conatct Page")
        res.end()
    }

}).listen(9000)
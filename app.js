// // http module
//  

const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url==='/'){
        res.write("Welcome to Harley's Home page")
        res.end()
        return
    }
    
        if(req.url==='/about'){
            res.write("Welcome to Harley's About page")
            res.end()
            return
        }
    
            if(req.url==='/contact'){
                res.write("Welcome to Harley's Contact page")
                res.end()
                return
            }
            res.write("4040 page not found")
            res.end()

})
const port = 4040

server.listen(port,() =>{
    console.log(`server is running on http://localhost:${port}...`)
})
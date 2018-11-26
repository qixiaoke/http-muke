const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer(function(request, response) {
    console.log('request come', request.headers.host)

    // const html = fs.readFileSync('test.html')

    // response.writeHead(200, {
    //    'Content-Type':'text/html',
    //    'Content-Encoding':'gzip'
    // })
    // response.end(zlib.gzipSync(html))
    
    const html = fs.readFileSync('test.html', 'utf-8')

    response.writeHead(200, {
       'Content-Type':'text/html'
    //    'Content-Encoding':'gzip'
    })
    response.end(html)
}).listen(8888)


console.log('server listening 8888')
const http = require('http')
const fs = require('fs')

http.createServer(function(request, response) {
    console.log('request come', request.url)

    const html = fs.readFileSync('test.html', 'utf-8')
    response.writeHead(200, {
        'Content-Type':'text/html',
        'Set-Cookie':['id=123; max-age=2', 'abc=456; httpOnly']
    })
    response.end(html)
}).listen(8888)


console.log('server listening 8888')
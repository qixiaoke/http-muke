const http = require('http')
const fs = require('fs')
const wait = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

http.createServer(function(request, response) {
    console.log('request come', request.headers.host)
    
    const html = fs.readFileSync('test.html', 'utf-8')

    if(request.url === '/') {
        response.writeHead(200, {
            'Content-Type':'text/html'
         })
         response.end(html)
    }

    if(request.url === '/data') {
        response.writeHead(200, {
            // 浏览器只会看max-age
            // 如果有s-maxage 代理服务器会看这个
            // private表示只有浏览器才可以缓存，代理服务器不缓存
            // no-store浏览器和代理服务器都不缓存
            // 'Cache-Control':'max-age=5, s-maxage=20, private'
            // 'Cache-Control':'max-age=5, s-maxage=20, no-store'
            'Cache-Control':'s-maxage=200',
            'Vary':'X-Test-Cache'
         })
        wait(2).then(() => response.end('success'))
    }
}).listen(8888)


console.log('server listening 8888')
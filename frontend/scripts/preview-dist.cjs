const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..', 'dist')
const port = process.env.PORT || 4173
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
}

http
  .createServer((req, res) => {
    const requestPath = decodeURIComponent(req.url.split('?')[0])
    const pathname = requestPath === '/' || !path.extname(requestPath) ? '/index.html' : requestPath
    const filePath = path.join(root, pathname)

    if (!filePath.startsWith(root)) {
      res.writeHead(403)
      res.end('Forbidden')
      return
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404)
        res.end('Not found')
        return
      }

      res.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'application/octet-stream' })
      res.end(data)
    })
  })
  .listen(port, '127.0.0.1', () => {
    console.log(`Preview running at http://127.0.0.1:${port}`)
  })

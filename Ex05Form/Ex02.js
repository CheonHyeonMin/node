const { log } = require('console')
const http = require('http')
const fs = require('fs').promises
const url = require('url')


const server = http.createServer(async(req,res)=>{
    let reqUrl = req.url
    let pathname = url.parse(reqUrl, true).pathname
    console.log(pathname)
    if(pathname === '/api/form'){
        const f = await fs.readFile('./Ex02.html')
        res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
        res.write(f)
        res.end()
    }
    else if(pathname === '/api/result'){
        let html = ''
        let result = 0
        let queryData = url.parse(reqUrl, true).query
        res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
        switch (queryData.cal) {
            case "+":
                result = Number(queryData.first) + Number(queryData.second)
                html = '<html><body>'+result+'</body></html>'
                break;
            case "-":
                result = Number(queryData.first) - Number(queryData.second)
                html = '<html><body>'+result+'</body></html>'
                break;
            case "*":
                result = Number(queryData.first) * Number(queryData.second)
                html = '<html><body>'+result+'</body></html>'
                break;
            case "/":
                result = Number(queryData.first) / Number(queryData.second)
                html = '<html><body>'+result+'</body></html>'
                break;
            
        }
                res.write(html)
                res.end()
    }
    
})
server.listen(8888)
server.on('listening', ()=>{
    log('8888번 포트에서 서버 연결 기다리는중...')
})

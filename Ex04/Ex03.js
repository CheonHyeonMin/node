const http = require('http')
const fs = require('fs').promises


const server = http.createServer(async(req, res)=>{

    const file = await fs.readFile('./Ex03.html') //async + await => 비동기 방식으로 처리할 때, await= 파일을 정상적으로 읽어드릴때까지 기다린다
    
    res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
    res.write(file)
    res.end()

})

server.listen(8888)
server.on('listening', ()=>{
    console.log('8888 포트에서 서버연결 기다리는중...');
})

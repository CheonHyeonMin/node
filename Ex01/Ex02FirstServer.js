//http 모듈
const http = require('http')

//req(요청), res(응답)
//무조건 앞쪽에는 req객체, 뒤에는 res객체
http.createServer((req, res)=>{
    //요청, 응답 로직 작성
    
}).listen(8888, ()=>{
    console.log('8888 포트에서 서버 연결 기다리는중...');
})
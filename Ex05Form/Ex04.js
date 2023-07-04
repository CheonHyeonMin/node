
const http = require('http')
const fs = require('fs').promises
const url = require('url')
const qs = require('querystring')

const server = http.createServer(async(req,res)=>{ //async는 await를 사용하는 함수가 호출되는 앞쪽에 붙인다.
    //url 다루기 ! -> url 모듈 사용
    let reqUrl = req.url
    let pathname = url.parse(reqUrl, true).pathname;

    console.log(req.method);

    
    if(pathname === '/api/form'){
        const f = await fs.readFile('./Ex04.html')
        res.writeHead(200 , {'Content-Type' : 'text/html; charset=UTF-8'})
            res.write(f)
            res.end()
    }

    
    if(req.method === 'POST'){
        
        if(pathname === '/api/join'){

            let body= ''

            //data 이벤트(data가 들어오는 이벤트)가 발생하면 함수 호출
            //들어오는 데이터들을 하나로 묶어주는 작업
            req.on('data', function(data) {
                body +=data
            })

            req.on('end', function(){
                console.log(qs.parse(body));
                let data = qs.parse(body)
                res.writeHead(200 , {'Content-Type' : 'text/html; charset=UTF-8'})
            let html = '<html>'
            html+='<body>'
            html+='<h3>아이디 : '+data.id+'</h3>'
            if(data.pw === data.pwcheck){
                html+='<h3>비밀번호가 일치합니다.</h3>'
            }
            else{
                html+='<h3>비밀번호가 일치하지 않습니다.</h3>'
            }
            html+='<h3>성별 :'+data.gender+'</h3>'
            html+='<h3>혈액형 :'+data.blood+'</h3>'
            html+='<h3>생일 : '+data.date+'</h3>'
            html+='<h3>취미 : '+data.hb+'</h3>'
            html+='<h3>좋아하는 색깔 : '+data.color+'</h3>'
            html+='<h3>남기는 말 :'+data.area+'</h3>'
            html+='</body>'
            html+= '</html>'
            res.write(html)
            res.end()
            })
        }
    }

    // log(req.url);
    
})

server.listen(8888)
server.on('listening', ()=>{
    console.log('8888번 포트에서 서버 연결 기다리는중...');
})

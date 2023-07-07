// DB연동하기 
// DB에서 가지고온값 출력하려면 jsp활용함 , 일반html가지고올수없음(정적문서여서...)
// 템플릿엔진 nunjucks을 활용해서 html 상에서 반복문, 조건문을 같이 사용가능함.
const express = require('express')
const nunjucks = require('nunjucks')
const indexRouter =  require('./routes')  // => ./rotes/index  라우터이름이 index는 생략가능함 
const app = express()




// html 문서 경로 , 형식 지정
app.set('views' , __dirname+'/views')       // html파일 만들때 경로가지고잇는 변수설정
app.set('view engine', 'html')      //view의형식 지정

// nunjucks 설정
nunjucks.configure('views', {
    express : app, // app 객체 연결
    watch : true // html 파일이 제대로 연결되면 템플릿 엔진을 렌더링하겠다! (화면에보여주겟다!)

})

app.use(express.urlencoded({extended : true})) //body 데이터를 다룰 수 있음

app.use ('/', indexRouter) // localhost:8888/...



app.set('port', process.env.PORT||8888)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버연결 기다리는 중 ...')
})
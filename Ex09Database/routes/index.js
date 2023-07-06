const express = require('express')
const router = express.Router()
const db = require('../config/database')

const conn = db.init() //연결 객체 생성, 반환
db.connect(conn) //연결

//member 테이블 전체 정보 가져오기
router.get('/select', (req,res)=>{
      // 템플릿엔진  : html 양식 (템플릿) + 데이터  -> 결과 문서(nunjucks활용)
      //            => 가지고온 데이터를 활용해서 화면 렌더링

      let sql = 'select * from member'
                        //결과처리 (err - 오류, rows - select 결과(데이터), fields,  결과외의 메타데이터)
      conn.query(sql, function(err, rows, fields){
            // console.log(err)
            // console.log(rows)
            // console.log(fields)

            res.render('index', {list :rows })
      })

              // DB가져올 데이터는('index', 인덱스 뒤에 작성하기 ) 
    
})

router.get('/select/:id', (req,res)=>{
    console.log(req.params);
})

module.exports = router
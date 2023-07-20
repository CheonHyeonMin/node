const express = require('express')
const router = express.Router()
const db = require('../config/database')

const conn = db.init()
db.connect(conn)
//http://172.30.1.43:8888/join
//회원가입
router.post('/join', (req,res)=>{
    console.log(req.body.AndMember);
    let {id, pw, tel, birth} = JSON.parse(req.body.AndMember)

    let sql = 'insert into andmember values(?,?,?,?)'

    conn.query(sql,[id,pw,tel,birth], function(err,rows){
        if(err){ //오류 발생
            console.log(err);
            res.send('Fail')
        }
        else{ //오류 발생하지 않았을 때
            // console.log(rows);
            if(rows.affectedRows>0){
                res.send('Success')
            }
            else{
                res.send('Fail')
            }
        }
    })

    
    
})

//로그인
router.post('/login', (req,res)=>{
    console.log(req.body.AndMember);
    //가져온건 문자열이기 때문에 JSON 형태로 다시 바꿔줌
    let {id, pw} = JSON.parse(req.body.AndMember)

    let sql = 'select * from andmember where id=? and pw=?'

    conn.query(sql,[id,pw], function(err,rows){
        if(err){ //오류 발생
            console.log(err);
            res.send('Fail')
        }
        else{ //오류 발생하지 않았을 때
            console.log(rows);
            if(rows.length>0){
                res.send('Success')
            }
            else{
                res.send('LoginFail')
            }
        }
    })

    
    
})

module.exports= router
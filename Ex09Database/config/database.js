//mysql2 : promises  사용이 가능한 형태
const mysql = require('mysql2')

const db_info = {
    host: 'localhost',
    port : '3306',
    user : 'fullstack',
    password : '12345',
    database : 'boot'
}

//db연결 -> 함수 (초기화, 연결)

module.exports = {
    init : function(){ //작성한 db 연결정보로 연결(connection) 객체 생성, 반환
        return mysql.createConnection(db_info) //연결 객체 생성
    },
    connect : function(conn){ //mysql 서버 연결
        conn.connect(function (err){
            if(err) console.log('연결실패!' +err)
            else console.log('연결성공')
        })
    }
}

const mysql = require('mysql2')

const db_info ={
    host : 'localhost',
    port : '3306',
    user : 'fullstack',
    password : '12345',
    database : 'boot'
}


//db 연결 -> 함수(초기화, 연결)

module.exports = {
    init : function(){
        return mysql.createConnection(db_info)
    },
    connect : function(conn){
        conn.connect(function(err){
            if(err) console.log('연결실패' +err);
            else console.log('연결성공');
        })
    }
}
const express = require('express')
const router = express.Router()
const db = require('../config/database')

const conn = db.init()
db.connect(conn)
//http://172.30.1.43:8888/join
//회원가입
router.post('/join', (req,res)=>{
    console.log(req.body.AndMember);
    let andMember = JSON.parse(req.body.AndMember)

    console.log(andMember);
    res.send('OK')



})

module.exports= router
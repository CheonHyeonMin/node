const express = require('express')
const router = express.Router()
const Room = require('../models/room')

//첫페이지(login.html)
router.get('/', (req,res) =>{
    res.render('login') //login.html 렌더링
})

//rooms.html (db에서 채팅방 데이터 불러오기)
router.get('/rooms', async(req,res, next)=>{
    // room 테이블에 있는 모든 데이터  가져오기
    // console에 가지고 온 데이터 출력
    try{
        const result = await Room.findAll()
        console.log(result);
        res.render('rooms',{ result : result}) //rooms.html 렌더링
    }
    catch(err){
        next(err)
    }
    
    

})



module.exports = router
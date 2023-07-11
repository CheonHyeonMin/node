const express = require('express')
const sequelize = require('sequelize')
const Member = require('../models/member')
const router = express.Router()

// router.post('/login', (req,res)=>{
//     req.session.Member = {id, pw, nick}
//     req.session.save(function(){res.send('OK')})
    
// })
router.post('/login', async(req,res, next)=>{
    let {id, pw} = req.body
    console.log(req.body);
    try{
        const result = await Member.findOne({
            where : {id : id, pw : pw},
            attributes : ['id', 'pw','nick'] // attributes 써주지 않으면 속성값을 다 가져옴
        })
        // req.session.member = result
        req.session.Member_id = result.id
        req.session.Member_pw = result.pw
        req.session.Member_nick = result.nick
        console.log(result.dataValues)
        res.send('OK')
        // res.json(result)
    }
    catch(err){
        next(err)
    }
})


module.exports = router
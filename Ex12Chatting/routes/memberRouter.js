const express = require('express')
const Member = require('../models/member')
const router = express.Router()

router.post('/login', async (req, res, next) => {

    let {id, pw} = req.body

    try {
        const member = await Member.findOne({
            where : {id : id, pw : pw}
        })
        req.session.member = member

        req.session.save(function() {
            if (member) {
                res.redirect('/rooms')
            } else {
                res.redirect('/')
            }
        })
    } catch (err) {
        next(err)
    }

})

module.exports = router
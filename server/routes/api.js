const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Message = require('../models/Message').model

router.post('/login/', function (req, res) {
    const username = req.body.username
    User.findOne({ name: username }, function (err, user) {
        if (!user) {
            console.log(user)
            const newUser = new User({ name: username, friends: [], messages: [] })
            newUser.save()
            res.send(newUser)
        } else { res.send(user) }
    })
})

router.post('/message', function (req, res) {
    const payload = req.body
    const message = new Message({ sender: payload.sender, text: payload.text })

    User.findOne({ name: payload.to }, function (err, user) {
        user.messages.push(message)
        user.save()
        res.end()
    })
})

module.exports = router
const express = require('express')
const app = express()
const router = express.Router()

router.post('/webhook', require('./routes/webhook'))

module.exports = router

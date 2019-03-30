import express = require('express');

const router = express.Router()

router.get('/', function(req, res){
    res.render('index')
})

router.get('/error', function(req, res){
    throw new Error("test error")
})

export = router;
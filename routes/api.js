const express = require('express');
const router = express.Router();

//Get dictionary
router.get('/dic', function(req, res){
    res.send({type: 'GET'});
});

//post new work to Dictionary
router.post('/dic', function(req, res){
    res.send({type: 'POST'});
});

//update word in dictionary
router.put('/dic/:word', function(req, res){
    res.send({type: 'PUT'});
});


//Delete word in dictionary
router.get('/dic/:word', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
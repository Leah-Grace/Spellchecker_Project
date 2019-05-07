const express = require('express');
const router = express.Router();

//Get dictionary
router.get('/dic', function(req, res){
    res.send({type: 'GET'});
});

//post new work to Dictionary
router.post('/dic', function(req, res){
    console.log(req.body.rank);
    res.send({type: 'POST',
name: req.body.name,
rank: req.body.rank});
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
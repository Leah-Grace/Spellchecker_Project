const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');


//Get dictionary
router.get('/dic', function(req, res, next){
    console.log("Something");
    res.send({type: 'GET'});
});

//post new Ninja to Dictionary
router.post('/dic', function(req, res, next){
   // var ninja = new Ninja();
    console.log(req.body.rank);
    res.send({type: 'POST',
name: req.body.name,
rank: req.body.rank});
});

//post new Ninja to Database
router.post('/ninjas', function(req, res, next){
     Ninja.create(req.body).then(function(ninja){
         res.send(ninja);
     }).catch(next);
     console.log(req.body);
 });

//update word in dictionary
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
    res.send({type: 'PUT'});
});


//Delete word in dictionary
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
    res.send({type: 'DELETE'});
});

module.exports = router;
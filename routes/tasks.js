const express = require('express');
const router  = express.Router();
const mongojs = require('mongojs');
const db      = mongojs('mongodb://admin:admin@ds143588.mlab.com:43588/realmean', ['beers']);

// Get all beers
router.get('/beers', function(req, res, next){
    db.beers.find(function(err, beers){
        if(err){
            res.send(err);
        }
        res.json(beers);
    });
});

// Get Single beer
router.get('/beer/:id', function(req, res, next){
    db.beers.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, beer){
        if(err){
            res.send(err);
        }
        res.json(beer);
    });
});

// save beer
router.post('/task', function(req, res, next){
    let beer = req.body;
    if(!beer.title || !beer.onTap + ''){
        res.status(400);
        res.json({
            "error": "bad data"
        });
    } else {
        db.beers.save(beer, function(err, beer){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

// delete beer
router.delete('/beer/:id', function(req, res, next){
    db.beers.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, beer){
        if(err){
            res.send(err);
        }
        res.json(beer);
    });
});

// update beer
router.put('/beer/:id', function(req, res, next){
    let beer    = req.body;
    let updBeer = {};

    if(beer.onTap){
        updBeer.onTap=beer.onTap;
    }
    if(beer.title){
        updBeer.title=beer.title;
    }

    if(!updBeer){
        res.status(400);
        res.json({
            'error':'Bad Data'
        });
    } else {
        db.beers.update({_id: mongojs.ObjectId(req.params.id)}, updBeer, {}, function(err, beer){
            if(err){
                res.send(err);
            }
            res.json(beer);
        });
    }
});

module.exports = router;
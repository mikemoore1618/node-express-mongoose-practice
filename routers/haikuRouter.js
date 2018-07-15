const 
    express = require('express'),
    haikuRouter = new express.Router(),
    haikusCtrl = require('../controllers/haikus')

    haikuRouter.get('/', haikusCtrl.index)
    haikuRouter.post('/', haikusCtrl.create)
    haikuRouter.delete('/:id', haikusCtrl.destroy)


    module.exports = haikuRouter
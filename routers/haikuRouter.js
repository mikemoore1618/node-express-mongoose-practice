const 
    express = require('express'),
    haikuRouter = new express.Router(),
    haikusCtrl = require('../controllers/haikus')

    haikuRouter.get('/', haikusCtrl.index)
    haikuRouter.get('/:id', haikusCtrl.showHaiku)
    haikuRouter.post('/', haikusCtrl.create)
    haikuRouter.patch('/:id', haikusCtrl.update)
    haikuRouter.delete('/:id', haikusCtrl.destroy)


    module.exports = haikuRouter
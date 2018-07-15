const 
    express = require('express'),
    router = express.Router(),
    Haikus = require('../controllers/haikus')

    router.get('/', Haikus.showAll)
    router.post('/', Haikus.create);

    module.exports = HaikuRouter
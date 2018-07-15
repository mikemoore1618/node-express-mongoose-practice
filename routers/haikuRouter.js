const 
    express = require('express'),
    router = express.Router(),
    Haikus = require('../controllers/haikus')

    router.get('/', Haikus.showAll)

    module.exports = router
const 
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    PORT = 3000,
    haikuRouter = require('./routers/haikuRouter');

// CONNECT TO DB
mongoose.connect('mongodb://localhost/node-express-mongoose-practice', (err) => {
    console.log(err || "SUCCESSFULLY CONNECTED TO MONGODB")
})

// MIDDLEWARE
app.use(logger('dev'))
app.use(express.json())

// Router
app.use('/api/haikus', haikuRouter)

// LISTEN ON THIS PORT
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}:)`);
});





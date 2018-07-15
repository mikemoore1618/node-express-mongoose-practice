const 
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    PORT = 3000,
    haikuRouter = require('./routers/haikuRouter');

// CONNECT TO DB
mongoose.connect(process.env.MONGODB_URI, (err) => {
    console.log(err || "CONNECTED TO MONGODB 👍")
})

// MIDDLEWARE
app.use(logger('dev'))
app.use(express.json())
app.use(express.static('public'))

// Router
app.use('/api/haikus', haikuRouter)

// LISTEN ON THIS PORT
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}:)`);
});





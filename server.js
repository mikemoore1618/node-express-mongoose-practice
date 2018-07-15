const 
    express = require('express');
    app = express();
    morgan = require('morgan');
    PORT = 3000;


// LISTEN ON THIS PORT
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}:)`);
});




